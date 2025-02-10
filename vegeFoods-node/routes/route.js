const express = require("express")
const route = express.Router()
const ctl = require("../controller/ctl")
const passport = require("passport")
const multer = require("../middleware/multer")


route.get("/Login", ctl.Login)
route.get("/SignUp", ctl.Signup)

route.post("/addUser", multer, ctl.addUser)

route.post(
    "/userLogin",
    passport.authenticate("local", {failureRedirect: "/Login"}),
    ctl.userLogin
)

route.get("/changePass", ctl.changePass)
route.post("/changePass", ctl.changePassword)

route.get("/recoverPass", ctl.recoverPass)
route.post("/recoverPass", ctl.recoverPassword)
route.post("/verifyPass", ctl.verifyPass)


route.get("/profile", ctl.profile)
route.get("/arrowToHhome", ctl.arrowToHhome)
route.get("/edit", ctl.edit)
route.post("/update", multer, ctl.update)
route.get("/addNewUser", ctl.addNewUser)
route.get("/logout", ctl.logout)


module.exports = route