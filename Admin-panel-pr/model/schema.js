const mongoose = require("mongoose")

const adminSchema = mongoose.Schema({
    fname: {
        type : String,
        require: true
    },
    lname: {
        type : String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require : true
    }
})

const Schema = mongoose.model("panel", adminSchema)
module.exports = Schema