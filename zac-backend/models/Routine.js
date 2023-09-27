const mongoose = require('mongoose')

const RoutineSchema = new mongoose.Schema({
    timeSlot: {
        type: String,
        required: true,
    },
    days: {
        type: String,
        required: true,
    },
    subject: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Subject',
    },
    teacher: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Teacher',
    },
    course: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course',
    },
    semester: {
        type: String,
        required: true,
    },
})

module.exports = mongoose.model('Routine', RoutineSchema)