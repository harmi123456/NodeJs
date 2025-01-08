const express = require("express")
const port = 5001

const app = express()
const db = require("./config/db")
const schema = require("./model/schema")

app.set("view engine", "ejs")
app.use(express.urlencoded())
app.use(express.static('public'))

app.get("/", (req,res) => {
    res.render("dashboard")
})


app.listen(port, (err) => {
    err ? console.log(err) : console.log("server started on : " + port)
})