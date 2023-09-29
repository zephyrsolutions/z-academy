const router = require("express").Router()
const { userRegister, userLogin, userAuth } = require('../utils/Auth')
const adminController = require('../controllers/Auth/admin')
const teacherController = require('../controllers/Auth/teacher')
const studentController = require('../controllers/Auth/student')

// Admin registration route
router.post('/register-admin', adminController.registerAdmin)

// Tecaher registration route
router.post('/register-teacher', teacherController.registerTeacher)

// Student registration route
router.post('/register-student', studentController.registerStudent)


// Admin login route
router.post('/login-admin', adminController.loginAdmin)

// Teacher login route
router.post('/login-teacher', teacherController.loginTeacher)

// Student login route
router.post('/login-student', studentController.loginStudent)

// Profile route
router.get('/profile', userAuth, async(req, res) => {
    return res.json("Hello")
})

/* To be completed later.. */

// Admin protected route
// router.post('/admin-protected', async(req, res) => {})

// Agent protected route
// router.post('/agent-protected', async(req, res) => {})

// Buyer protected route
// router.post('/buyer-protected', async(req, res) => {})

module.exports = router