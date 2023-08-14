const mongoose = require('mongoose')

const SlotSchema = new mongoose.Schema({
    timeSlot: {
        type: String,
        required: true,
    },
    days: {
        type: Array,
        required: true,
    },
    course: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course',
    },
    semester: {
        type: String,
        required: true,
    }
})

module.exports = mongoose.model('Slot', SlotSchema)