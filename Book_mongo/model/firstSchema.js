const mongoose = require("mongoose")

const schema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    author: {
        type: String,
        require: true
    },
    price: {
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