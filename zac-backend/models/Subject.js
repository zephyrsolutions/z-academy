const mongoose = require('mongoose')

const SubjectSchema = new mongoose.Schema({
    course: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course',
    },
    semester: {
        type: String,
        required: true,
    },
    subjectName: {
        type: String,
        required: true,
    },

})

module.exports = mongoose.model('Subject', SubjectSchema)