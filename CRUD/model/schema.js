const mongoose = require("mongoose")

const schema_1 = mongoose.Schema({
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

const schema = mongoose.model("student", schema_1)

module.exports = schema