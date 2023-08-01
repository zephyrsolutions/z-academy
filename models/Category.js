const mongoose = require('mongoose')

const CategorySchema = new mongoose.Schema({
    categoryName: {
        type: String,
        required: true,
    },
    categoryStatus: {
        type: Number,
        require: true,
    }
})

module.exports = mongoose.model('Category', CategorySchema)