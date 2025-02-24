const express = require("express")
const port = 4000

const app = express()
const schema = require("./model/schema")
const db = require("./config/db")
const cors = require("cors")

app.use(express.urlencoded({ extended: true }));
app.use(express.json())

app.use(cors({origin : "http://localhost:5173"}))

app.use("/", require("./routes/route"))

app.listen(port, (err) => {
    err ? console.log(err) : console.log("server started on : " + port)
})