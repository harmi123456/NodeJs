const express = require("express")
const port = 5001

const app = express()
app.set("view engine", "ejs")
app.use(express.static('public'))

app.get("/", async (req,res) => {
    res.render("index")
})

app.listen(port , (err) => {
    err ? console.log(err) : console.log("server started on : " + port)
})