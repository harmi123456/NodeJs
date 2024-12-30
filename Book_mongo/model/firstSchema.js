const mongoose = require("mongoose")

const schema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    subject: {
        type: String,
        require: true
    },
    city: {
        type: String,
        require: true
    },
    img: {
        type: String,
        require: true
    }
})

const firstSchema = mongoose.model("Student", schema)

module.exports = firstSchema