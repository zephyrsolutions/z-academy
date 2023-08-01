const mongoose = require('mongoose')

const AssignmentSchema = new mongoose.Schema({
    assignment: {
        type: Array,
        required: true,
    },
    cloudinary_ids: {
        type: Array,
    }
})

module.exports = mongoose.model('Assignment', AssignmentSchema)