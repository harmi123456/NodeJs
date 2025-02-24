const mongoose = require("mongoose")

const schema = mongoose.Schema({
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
    },
    gender: {
        type: String,
        require: true
    }

})

const loginSchema = mongoose.model("Final-Pr Login" , schema)
module.exports = loginSchema