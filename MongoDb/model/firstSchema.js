const mongoose = require("mongoose")

const schema = mongoose.schema({
    name : {
        type: String,
        require: true
    },
    subject : {
        type : String,
        require: true
    },
    city : {
        type : String,
        require : true
    }
})

const firstSchema = mongoose.model("student", schema)

module.exports = firstSchema