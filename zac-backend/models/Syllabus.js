const mongoose = require('mongoose')

const SyllabusSchema = new mongoose.Schema({
    course: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course',
    },
    syllabusImage: {
        type: String,
        required: true,
    },

    uploadDate: {
        type: Date,
        required: true,
    },
    cloudinary_id: {
        type: String,
    },
    
})

module.exports = mongoose.model('Syllabus', SyllabusSchema)