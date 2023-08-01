const mongoose = require('mongoose')

const TeacherSchema = new mongoose.Schema({
    teacherName: {
        type: String,
        required: true,
    },
    teacherEmail: {
        type: String,
        required: true,
    },
    teacherPhoneNo: {
        type: String,
        required: true,
    },
    teacherAddress: {
        type: String,
        required: true,
    },
    teacherDesignation: {
        type: String,
        required: true,
    },
    dateofJoining: {
        type: Date,
        required: true,
    },
    teacherDOB: {
        type: Date,
        required: true,
    },
    teacherGender: {
        type: String,
        required: true,
    },
    teacherImage: {
        type: String,
    },
    department:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Department',
    },
    cloudinary_id: {
        type: String,
    },
})

module.exports = mongoose.model('Teacher', TeacherSchema)