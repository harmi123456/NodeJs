const express = require("express")
const port = 1001

const app = express()
const db = require("./config/db")
const schema = require("./model/firstSchema")

app.set("view engine", "ejs")
    app.use(express.static('public'))
app.use(express.urlencoded())
app.use(express.json());


// app.get("/", (req, res) => {
//     res.render("index")
// })

app.get("/", async (req,res) => {
    let data = await schema.find({});
    res.render("index", {data})
})

app.post("/addData", async (req,res) => {
    await schema.create(req.body);
    res.redirect("/")
})

app.get("/deleteData", async (req, res) => {
    console.log(req.query.id)
    await schema.findByIdAndDelete(req.query.id)
    .then((data) => {
        res.redirect("/")
    })
})

app.get("/editData", async (req,res) => {
    let data = await schema.findById(req.query.id)
    res.render("edit", {data})
})

app.post("/updateData", async (req,res) => {
    console.log(req.body.id)
    await schema.findByIdAndUpdate(req.body.id, req.body)
    .then((data) => {
        res.redirect("/")
    })
})

app.listen(port , (err) => {
    err ? console.log(err) : console.log("server started on : " + port);
    
})