const mongoose = require('mongoose')

const IssuedBookSchema = new mongoose.Schema({
    book: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Book',
    },
    student: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student',
    },
    issuesDate: {
        type: Date,
        required: true,
    },
    returnDate: {
        type: String,
        required: true,
    },
    returnStatus: {
        type: Number,
    },
    fine: {
        type: String,
        required: true,
    },
})

module.exports = mongoose.model('IssuedBook', IssuedBookSchema)