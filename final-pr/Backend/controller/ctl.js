const schema = require("../model/schema")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

module.exports.register = async (req, res) => {
    console.log(req.body)

    let admin = await schema.findOne({email: req.body.email })

    if(admin) {
        return res.status(200).json({ msg: "Admin Already exists ! "})
    }

    req.body.password = await bcrypt.hash(req.body.password, 10)

    await schema.create(req.body).then(() => {
        res.status(200).json({ msg: "Admin Created ! "})
    })
}

module.exports.Login = async (req, res) => {
    let admin = await schema.findOne({email : req.body.email})

    if(!admin) {
        return res.status(200).json({msg : "Admin not Found ! "})
    }

    if(await bcrypt.compare(req.body.password, admin.password)) {
        let token = jwt.sign({adminData: admin}, "rnw", {expiresIn: "1h"})
        res.status(200).json({msg: "admin LoggedIn !", token: token})
    } else {
        res.status(200).json({ msg: "Password is wrong ! "})
    }
}

module.exports.viewAdmin = async (req, res) => {
    await schema.find({}).then((data) => {
        res.status(200).json({"data" : data})
    })
}


module.exports.dashboard = async (req, res) => {
    let data = await schema.find({})
    res.render("dashboard", {data})
}

module.exports.addData = async (req, res) => {
    await schema.create(req.body).then((data) => {
        res.redirect("/dashboard")
    })
}