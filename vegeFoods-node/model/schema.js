const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    fname: {
        type: String,
        require: true
    },
    lname: {
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
    conPass: {
        type: String,
        require: true
    },
    userName: {
        type: String,
        require: true
    },
    phon1: {
        type: String,
        require: true
    },
    phon2: {
        type: String,
        require: true
    },
    pic: {
        type: String,
        require: true
    },
    profession: {
        type: String,
        require: true
    },
    address: {
        type: String,
        require: true
    },
    github: {
        type: String,
        require: true
    },
    twitter :{
        type: String,
        require: true
    },
    insta: {
        type: String,
        require: true
    },
    fb: {
        type: String,
        require: true
    }
})

const schema = mongoose.model("users", userSchema)
module.exports = schema