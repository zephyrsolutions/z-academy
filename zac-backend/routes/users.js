const router = require("express").Router()
const { userRegister, userLogin, userAuth, checkRole, serializeUser } = require('../utils/Auth')
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
    return res.json(serializeUser(req.user))
})

// Admin PROTECTED route
router.get('/admin-protected', userAuth, checkRole(['admin']), (req, res) => {
    return res.status(200).send({
        success: true,
        user: req.user
    })
})

// Teacher PROTECTED route
router.get('/teacher-protected', userAuth, checkRole(['teacher']), async(req, res) => {
    return res.json("Hello Teacher")
})

// Student PROTECTED route
router.get('/student-protected', userAuth, checkRole(['student']), async(req, res) => {
    return res.json("Hello Student")
})

// Student and Teacher PROTECTED route
router.get('/student-teacher-protected', userAuth, checkRole(['student', 'teacher']), async(req, res) => {
    return res.json("Hello Student | Teacher")
})

module.exports = router