const schema = require("../model/studetnSchema")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

module.exports.studentRegister = async(req, res) => {
    console.log(req. body)

    let student = await schema.findOne({ email: req.body.email })

    if(student) {
        return res.status(200).json({ msg: "Student Already exists !"})
    }

    req.body.password = await bcrypt.hash(req.body.password, 10)

    await schema.create(req.body).then(() => {
        res.status(200).json({ msg: "Student Added ! "})
    })
}


module.exports.studentLogin = async (req, res) => {
    let student = await schema.findOne({ email: req.body.email })

    if(!student) {
        return res.status(200).json({msg: "Student not found" })
    }

    if(await bcrypt.compare(req.body.password, student.password)) {
        let token = jwt.sign({studetnData: student}, "rnw", { expiresIn: "1h" })
        res.status(200).json({ msg: "Student LoggedIn ! ", token: token})
    } else {
        res.status(200).json({ msg: "Password is Wrong !"})
    }

}

module.exports.viewStudent = async (req, res) => {
    await schema.find({}).then((data) => {
        res.status(200).json({ "data" : data })
    })
}