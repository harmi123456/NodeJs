
const express = require("express")
const port = 1001

const app = express()

app.set("view engine", "ejs")
const db = require("./config/db")

app.get("/", (req,res) => {
    res.render("index")
})

app.listen(port, (err) => {
    err ? console.log(err) : console.log("Server Started on : " + port)
})