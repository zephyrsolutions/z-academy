const mongoose = require('mongoose')

const StudentSchema = new mongoose.Schema({
    studentName: {
        type: String,
        required: true,
    },
    studentEmail: {
        type: String,
        required: true,
    },
    studentPhoneNo: {
        type: String,
        required: true,
    },
    studentAddress: {
        type: String,
        required: true,
    },
    studentDOB: {
        type: Date,
        required: true,
    },
    studentGender: {
        type: String,
        required: true,
    },
    course: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course',
    },
    studentImage: {
        type: String,
    },
    semesterName: {
        type: String,
        required: true,
    },
    dateofAdmission: {
        type: Date,
        required: true,
    },
    cloudinary_id: {
        type: String,
    },
})

module.exports = mongoose.model('Student', StudentSchema)