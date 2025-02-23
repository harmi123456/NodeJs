const HODschema = require("../model/HODschema")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

module.exports.registerHOD = async (req, res) => {
    console.log(req.body)

    let HOD = await HODschema.findOne({ email: req.body.email })

    if(HOD) {
        return res.status(200).json({ msg: "HOD Already exists ! "})
    }

    req.body.password = await bcrypt.hash(req.body.password, 10)

    await HODschema.create(req.body).then(() => {
        res.status(200).json({msg : "HOD Registred !"})
    })
}


module.exports.loginHOD = async (req, res) => {
    let HOD = await HODschema.findOne({ email: req.body.email })

    if(!HOD) {
        return res.status(200).json({msg: "HOD not Found" })
    }

    if (await bcrypt.compare(req.body.password, HOD.password)) {
        let token = jwt.sign({ HODdata: HOD }, "rnw", { expiresIn: "1h" })
        res.status(200).json({ msg: "HOD loggedIn ! ", token:token })
    } else {
        res.status(200).json({msg: "Password is wrong !"})
    }
}


module.exports.viewHOD = async (req, res) => {
    await HODschema.find({}).then((data) => {
        res.status(200).json({"data" : data})
    })
}