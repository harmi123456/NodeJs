const express = require("express")
const route = express.Router()
const ctl = require("../controller/ctl")

route.get("//addAdmin",ctl.addAdmin)

module.exports = route;