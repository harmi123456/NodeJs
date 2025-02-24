const express = require("express")
const ctl = require("../controller/ctl")
const route = express.Router()
const auth = require("../middleware/jwtAuth")

route.post("/register",  ctl.register)
route.post("/Login", ctl.Login)
route.get("/viewAdmin", auth, ctl.viewAdmin)

route.post("/addData", ctl.addData)
route.get("/viewData", ctl.viewData)
route.delete("/deleteData", ctl.deleteData)
route.put("/updateData", ctl.updateData)

module.exports = route;