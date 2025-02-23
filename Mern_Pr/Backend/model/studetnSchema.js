const  mongoose = require("mongoose")

const studentSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    city: {
        type: String,
        require: true
    }
})

const studentLogin = mongoose.model("Login student", studentSchema)
module.exports = studentLogin