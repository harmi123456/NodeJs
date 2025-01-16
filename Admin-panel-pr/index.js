const express = require("express")
const port = 5000

const app = express()
const route = require("./routes/route")
const db = require("./config/db")
const cookies = require("cookie-parser")


app.set("view engine", "ejs")
app.use(express.urlencoded())
app.use(express.static("public"))
app.use(cookies())
app.use("/", route)


app.get("/", (req,res) => {
    res.render("dashboard")
})

app.listen(port, (err) => {
    err ? console.log(err) : console.log("Server Started on : " + port)
})