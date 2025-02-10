const express = require("express")
const port = 5001

const app = express()
const db = require("./config/db")
// const passport = require("./middleware/passport")
const passport = require("./middleware/passport")
const session = require("express-session")

app.set("view engine", "ejs")
app.use(express.static("public"))
app.use(express.urlencoded({ extended: true }));

// app.use("/uploads", express.static("public/uploads"));

app.use(
    session({
        name: "local",
        secret: "rnw",
        resave: true,
        saveUninitialized: false,
        cookie: {maxAge: 100 * 100 * 60},
    })
)

app.use(passport.initialize())
app.use(passport.session())
app.use(passport.AuthenticatedUser)

app.get("/", (req, res) => {
    res.render("Home")
})

app.use("/", require("./routes/route"))

app.listen(port, (err) => {
    err ? console.log(err) : console.log("server started on : " + port)
})