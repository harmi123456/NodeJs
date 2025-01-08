const express = require("express")
const port = 1008

const app = express()

app.set ("view engine", "ejs")

const middleware = (req,res,next) => {
    console.log("This is MiddleWare")
    next();
}

app.get("/",middleware, (req,res) => {
    res.render("index");
})

app.get("/edit", (req,res) => {
    res.render("edit")
})


app.listen(port, (err) => {
    err ? console.log(err) : console.log("server started on : " + port);
})