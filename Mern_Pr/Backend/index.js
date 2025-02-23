const express = require("express")
const port = 4001

const app = express()
const cors = require("cors")

const schema = require("./model/Schema")
const studentSchema = require("./model/studetnSchema") 
const HODschema = require("./model/HODschema")

const db = require("./config/db")

app.use(express.urlencoded({ extended: true })) 
app.use(express.json())
app.use(cors())

app.use("/", require("./route/route"))
app.use("/student", require("./route/studentRoute"))
app.use("/HOD", require("./route/HODroute"))


app.listen(port, (err) => {
    err ? console.log(err) : console.log("server started on : "+ port)
})