const mongoose = require('mongoose')

const DepartmentSchema = new mongoose.Schema({
    departmentName: {
        type: String,
        required: true,
    },
    departmentLocation: {
        type: String,
        required: true,
    },
    // Department head ref here

})

module.exports = mongoose.model('Department', DepartmentSchema)