const schema = require("../model/Schema")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

module.exports.register = async (req, res) => {
    console.log(req.body)

    let admin = await schema.findOne({ email: req.body.email })

    if (admin) {
        return res.status(200).json({ msg: "admin already exists !" })
    }

    req.body.password = await bcrypt.hash(req.body.password, 10)

    await schema.create(req.body).then(() => {
        res.status(200).json({ msg: "Admin created ! " })
    })
}



module.exports.login = async (req, res) => {
    let admin = await schema.findOne({ email: req.body.email })

    if (!admin) {
        return res.status(200).json({ msg: "Admin Not Found" })
    }

    if (await bcrypt.compare(req.body.password, admin.password)) {
        let token = jwt.sign({ adminData: admin }, "rnw", { expiresIn: "1h" })
        res.status(200).json({ msg: "Admin LoggedIn ! ", token:token })
    } else {
        res.status(200).json({msg : "Password is Wrong !"})
    }
}



module.exports.viewAdmin = async (req, res) => {
    await schema.find({}).then((data) => {
        res.status(200).json({ "data": data })
    })
}