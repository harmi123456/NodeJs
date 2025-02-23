const express = require("express")
const ctl = require("../controller/HODctl")
const route = express.Router()
const auth = require("../middleware/jwtAuth")

route.post("/registerHOD", ctl.registerHOD)
route.post("/loginHOD", ctl.loginHOD)
route.get("/viewHOD", ctl.viewHOD)

module.exports = route