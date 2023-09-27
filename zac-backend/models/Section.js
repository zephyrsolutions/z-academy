const mongoose = require('mongoose')

const SectionSchema = new mongoose.Schema({
    courseName: {
        type: String,
        required: true,
    },
    semesterName: {
        type: String,
        required: true,
    },
    sectionName: {
        type: String,
        required: true,
    },
    totalStudent: {
        type: String,
        required: true,
    },
})

module.exports = mongoose.model('Section', SectionSchema)