const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        role: {
            type: String,
            default: "admin",
            enum: ["admin", "teacher", "student"]
        },
        username: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        }
    }, 
    { timestamps: true }
)

module.exports = mongoose.model("users", UserSchema)