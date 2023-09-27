const mongoose = require('mongoose')

const BookSchema = new mongoose.Schema({
    bookName: {
        type: String,
        required: true,
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Author',
    },
    ISBNNumber: {
        type: String,
        required: true,
    },
    bookPrice: {
        type: String,
        required: true,
    },
    bookImage: {
        type: String,
    },
    isIssued: {
        type: Number,
    },
    regDate: {
        type: Date,
        required: true,
    },
    updationDate: {
        type: Date,
        required: true,
    },
    cloudinary_id: {
        type: String,
    },
})

module.exports = mongoose.model('Book', BookSchema)