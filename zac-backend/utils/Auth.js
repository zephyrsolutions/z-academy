const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const passport = require('passport')
const User = require("../models/User")

require('dotenv').config({ path: '../config/.env' })

// Desc : To register the user (ADMIN, SUPERADMIN, USER)

const userRegister = async(userDetails, role, res) => {
    try{
        // Validate the username
        let usernameNotTaken = await validateUsername(userDetails.username)
        if(!usernameNotTaken){
            return res.status(400).json({
                message: 'Username is already taken',
                success: false
            }) 
        }

        // Validate the username
        let emailNotRegistered = await validateEmail(userDetails.email)
        if(!emailNotRegistered){
            return res.status(400).json({
                message: 'Email is already registered',
                success: false
            }) 
        }

        // Get the hashed password
        const password = await bcrypt.hash(userDetails.password, 12)

        // Create a new user
        const newUser = new User({
            ...userDetails,
            password,
            role
        })
        // Save the new user
        await newUser.save()

        return res.status(201).json({
            message: "Successfully registered!! You can Login now.",
            success: true
        })
    } catch(err){
        return res.status(500).json({
            message: "Unable to create your account..",
            success: false
        })
    }
}

const userLogin = async(userCreds, role, res) => {
    console.log(userCreds)
    let { username, password } = userCreds
    // First check if the username is in the database
    const user = await User.findOne({ username })
    if(!user){
        return res.status(404).json({
            message: 'Username is not found. Invalid login credentials',
            success: false
        })
    }
    // If the user is found, we will check the role
    if(user.role !== role){
        return res.status(403).json({
            message: 'Please make sure you are authorized..',
            success: false
        })
    }

    // If the user is valid, compare the password
    let isMatch = await bcrypt.compare(password, user.password)
    if(isMatch){
        // Sign in the token and issue it to the user
        let token = jwt.sign({
            user_id: user._id,
            role: user.role,
            username: user.username,
            email: user.email
        },
        process.env.SECRET,
        { expiresIn: "7 days" }
    )
        let result = {
            username: user.username,
            role: user.role,
            email: user.email,
            token: `Bearer ${token}`,
            expiresIn: 168
        }

        return res.status(200).json({
            ...result,
            message: "Logged in successfully!!",
            success: true
        })

    } else {
        return res.status(403).json({
            message: 'Incorrect password',
            success: false
        })
    }
}

const validateUsername = async(username) => {
    let user = await User.findOne({ username })    
    return user ? false : true
}

const validateEmail = async(email) => {
    let user = await User.findOne({ email })    
    return user ? false : true
}

// Check Role Middleware
const checkRole = roles => (req, res, next) => {
    if(roles.includes(req.user.role)) {
        return next()
    }
    return res.status(401).json({
        message: "Unauthorized",
        success: false
    })
}

// Passport middleware
const userAuth = passport.authenticate("jwt", { session: false })

const serializeUser = user => {
    return {
        _id: user._id,
        name: user.name,
        email: user.email,
        username: user.username,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
    }
}

module.exports = {
    userAuth,
    checkRole,
    userLogin,
    userRegister,
    serializeUser
}