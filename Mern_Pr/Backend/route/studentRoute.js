const express = require("express")
const ctl = require("../controller/studentCtl")
const route = express.Router()
const auth = require("../middleware/jwtAuth")

route.post("/studentRegister", ctl.studentRegister)
route.post("/studentLogin", ctl.studentLogin)
route.get("/viewStudent", ctl.viewStudent)

module.exports = route