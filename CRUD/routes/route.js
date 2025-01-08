const express = require("express")
const route = express.Router();
const ctl = require("../controller/ctl")
const upload = require("../middleware/multer")

route.get("/", ctl.firstPage)
route.post("/addData", upload, ctl.addData)

module.exports = route;