const express = require("express")
const ctl = require("../controller/ctl")
const route = express.Router()
const auth = require("../middleware/jwtAuth")

route.post("/register",  ctl.register)
route.post("/Login", ctl.Login)
route.get("/viewAdmin", auth, ctl.viewAdmin)

route.post("/addData", ctl.addData)

module.exports = route;