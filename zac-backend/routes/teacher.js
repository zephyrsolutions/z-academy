const express = require('express')
const router = express.Router()
const upload = require('../middleware/multer')
const teacherController = require('../controllers/teacher')

router.get('/', teacherController.getIndex)
router.get('/teacherDashboard', teacherController.getDashboard)

// Syllabus Route
router.get('/syllabus', teacherController.getSyllabus)
router.post('/addSyllabus',  upload.single('file'), teacherController.addSyllabus)
router.delete('/deleteSyllabus/:id', teacherController.deleteSyllabus)

// Assignment  Route
router.get('/assignment', teacherController.getAssignment)
router.post('/addAssignment', upload.array("files", 5), teacherController.addAssignment)

module.exports = router