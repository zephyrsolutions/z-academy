const mongoose = require('mongoose')

const SlotSchema = new mongoose.Schema({
    from: {
        type: String,
        required: true,
    },
    to: {
        type: String,
        required: true,
    },
    days: {
        type: Array,
        required: true,
    }
})

module.exports = mongoose.model('Slot', SlotSchema)