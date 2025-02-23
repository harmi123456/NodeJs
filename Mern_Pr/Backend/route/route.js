const express = require("express")
const ctl = require("../controller/Ctl")
const route = express.Router()
const auth = require("../middleware/jwtAuth")

route.post("/register", ctl.register)
route.post("/login", ctl.login)
route.get("/viewAdmin", ctl.viewAdmin)

module.exports = route