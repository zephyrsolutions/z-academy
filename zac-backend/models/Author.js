const mongoose = require('mongoose')

const AuthorSchema = new mongoose.Schema({
    authorName: {
        type: String,
        required: true,
    },
    creationDate: {
        type: Date,
        required: true,
    },
    updationDate: {
        type: Date,
        required: true,
    }
})

module.exports = mongoose.model('Author', AuthorSchema)