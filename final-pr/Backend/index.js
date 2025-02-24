const express = require("express")
const port = 4000

const app = express()
const schema = require("./model/schema")
const db = require("./config/db")
const cors = require("cors")

app.use(express.urlencoded())
app.use(express.json())
app.use(cors())

app.use("/", require("./routes/route"))

app.listen(port, (err) => {
    err ? console.log(err) : console.log("server started on : " + port)
})