const express = require('express')
const router = express.Router()
const upload = require('../middleware/multer')
const adminController = require('../controllers/admin')

router.get('/', adminController.getIndex)
router.get('/dashboard', adminController.getDashboard)

// Department Routes
router.get('/department', adminController.getDepartment) // For Add Department
router.post('/addDepartment', adminController.addDepartment) // For Add Department
router.get('/getDepartment/:id', adminController.getDepartmentById) // For Update Department
router.put('/editDepartment/:id', adminController.editDepartment) // For Update Department
router.delete('/deleteDepartment/:id', adminController.deleteDepartment) // For Delete Department

// Course Route
router.get('/course', adminController.getCourse) // For Add Course
router.post('/addCourse', adminController.addCourse) // For Add Course
router.get('/getCourse/:id/:did', adminController.getCourseById) // For Update Course
router.put('/editCourse/:id', adminController.editCourse) // For Update Course
router.delete('/deleteCourse/:id', adminController.deleteCourse) // For Delete Course

// Section Route
router.get('/section', adminController.getSection) // For Add Section
router.post('/addSection', adminController.addSection) // For Add Section
router.get('/getSection/:id', adminController.getSectionById) // For Update Section
router.put('/editSection/:id', adminController.editSection) // For Update Section
router.delete('/deleteSection/:id', adminController.deleteSection) // For Delete Section

// Subject Route
router.get('/subject', adminController.getSubject) // For Add Subject
router.post('/addSubject', adminController.addSubject) // For Add Subject
router.get('/getSubject/:id/:sem', adminController.getSubjectById) // For Update Subject
router.put('/editSubject/:id', adminController.editSubject) // For Update Subject
router.delete('/deleteSubject/:id', adminController.deleteSubject) // For Delete Subject

// Teacher Route 
router.get('/teacher', adminController.getTeacher) // For Add Teacher
router.post('/addTeacher', upload.single('file'), adminController.addTeacher) // For Add Teacher
router.get('/getTeacher/:id/:did', adminController.getTeacherById) // For Update Teacher
router.put('/editTeacher/:id', adminController.editTeacher) // For Update Teacher
router.delete('/deleteTeacher/:id', adminController.deleteTeacher) // For Delete Teacher

// Student Route
router.get('/student', adminController.getStudent)
router.post('/addStudent', upload.single('image'), adminController.addStudent)
router.get('/getStudent/:id', adminController.getStudentById)
router.put('/editStudent/:id', adminController.editStudent)
router.delete('/deleteStudent/:id', adminController.deleteStudent)

// Route To Fetch Specific Department Details By ID
router.get('/departmentMain/:id', adminController.getDepartmentMainById)

// Route To Fetch Specific Course Details By ID Under departmentMain
router.get('/courseMain/:id', adminController.getCourseMainById)

// Route To Fetch Specific Semester Details By ID Under courseMain
router.get('/semesterMain/:id/:sem', adminController.getSemesterMainById)
router.post('/addSlot', adminController.addSlot)// Add Slot Route

//Syllabus Route
router.get('/syllabus', adminController.getSyllabus) 
router.post('/addSyllabus', upload.single('image'), adminController.addSyllabus)

// Routine Route
router.post('/routine', adminController.routine)

module.exports = router