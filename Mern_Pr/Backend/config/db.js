const mongoose = require("mongoose")

mongoose.connect("mongodb://127.0.0.1/Mern-final-pr")

const db = mongoose.connection

db.once("open", (err) => {
    err ? console.log(err) : console.log("db connected")
})

module.exports = db