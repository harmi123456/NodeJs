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


module.exports.addData = async (req, res) => {
    console.log(req.body) 

    await schema.create(req.body).then(() => {
        res.status(200).json({"msg" : "Data Added Successfully !"})
    })
}

module.exports.viewData = async (req, res) => {
    console.log(req.body)

    await schema.find(req.body).then((data) => {
        res.status(200).json({"data": data})
    })
}


module.exports.deleteData = async (req, res) => {
    await schema.findByIdAndDelete(req.query.id).then(() => {
        res.status(200).json({msg: "Data deleted successfully !"})
    })
}

module.exports.updateData = async (req, res) => {
    await schema.findByIdAndUpdate(req.query.id, req.body).then(() => {
        res.status(200).json({msg: "Data Updated successfully !"})
    })
}