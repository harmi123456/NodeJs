
const express = require("express")
const port = 1000

const app = express()

app.set("view engine", "ejs")
app.use(express.urlencoded())

let students = [
    { id: "1", name: "Harmii", subject: "NodeJs" },
    { id: "2", name: "Aastha", subject: "ReactJs" },
    { id: "3", name: "Hetvi", subject: "ExpressJs" }
]

app.get("/", (req, res) => {
    res.render("index",{students})
})

app.post("/addData", (req,res) => {
    console.log(req.body)
    req.body.id = String(students.length + 1)
    students.push(req.body)
    res.redirect("/")
})

app.get("/deleteData" , (req,res) => {
    console.log(req.query)
    let deleteData = students.filter((e) => e.id !== req.query.id)
    students = deleteData
    res.redirect("/")
})

app.get("/editData/:id", (req, res) => {
    let singleData = students.find((item) => item.id == req.params.id)
    res.render("edit", {singleData})
})

app.post("/updateData", (req, res) => {
    
    students.map((e,i) => {
        if (e.id == req.body.id) {
            (e.id = req.body.id),
            (e.name = req.body.name),
            (e.subject = req.body.subject)
        } else {
            e;
        }
    })    
    res.redirect("/")
})

app.listen(port, (err) => {
    err ? console.log(err) : console.log("server started on : " + port);

})