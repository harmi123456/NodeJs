const schema = require("../model/schema")
const mailer = require("../middleware/mailer")

module.exports.Login = (req, res) => {
    res.render("Login")
}

module.exports.Signup = (req, res) => {
    res.render("SignUp", {data: null, isEdit: false})
}

module.exports.addUser = async (req, res) => {
    console.log(req.body)
    console.log(req.file)

    req.body.pic = req.file.path;

    await schema.create(req.body).then(() => {
        res.redirect("/Login")
    })
}


module.exports.userLogin = (req, res) => {
    res.redirect("/")
}

module.exports.changePass = (req, res) => {
    res.render("changePass")
}


module.exports.changePassword = async (req, res) => {

    let user = req.user
    console.log(user)

    //validation
    if(user.password == req.body.currentPassword) {

        if(req.body.currentPassword != req.body.newPassword) {

            if(req.body.newPassword == req.body.confirmPassword) {

                let admin = await schema.findByIdAndUpdate(user.id, { password: req.body.newPassword }, { new: true });
                admin && res.render("Home")

            } else {
                console.log("New Password and current Password must be same")
            }

        } else {
            console.log("old password and current password must be different")
        }

    } else {
        console.log("old password Wrong")
    }
}


module.exports.recoverPass = (req, res) => {
    res.render("recoverPass")
}


module.exports.recoverPassword = async (req, res) => {

    let admin = await schema.findOne({email: req.body.email})

    if(!admin)  {
        return res.redirect("/Login")
    }

    let otp = Math.floor(Math.random() * 1000 * 4000)
    console.log(otp)
    mailer.sendOtp(req.body.email, otp)

    req.session.otp = otp

    req.session.adminData = admin
    console.log(req.body)
    res.render("verifyPass")

}


module.exports.verifyPass = async (req, res) => {
    console.log(req.body)

    let otp = req.session.otp;
    let admin = req.session.adminData;

    if(req.body.otp == otp) {

        if(req.body.newPassword === req.body.confirmPassword) {

            let adminData = await schema.findByIdAndUpdate(admin._id, {
                password: req.body.newPassword
            })
            adminData && res.redirect("/Login")

        } else {
            console.log("new Password and confirm password must be same")
        }

    } else {
        res.redirect("/Login")
    }
}



module.exports.profile = async (req, res) => {
    await schema.find().then((data) => {
        res.render("profile", {data})
    })
}


module.exports.edit = async (req, res) => {
    console.log(req.body)

    let data = await schema.findById(req.query.id)
    res.render("edit", {data, isEdit: true})

    // schema.findById(req.session.userId).then((data) => {
    //     res.render("edit", {data})
    // })
}

module.exports.update = async (req, res) => {
    console.log(req.file)
    
    // req.body.pic = req.file.path;

    let updateData = { ...req.body }; 

    if (req.file) {
        updateData.pic = req.file.filename; 
    }

    await schema.findByIdAndUpdate(req.body.id, updateData)
        .then((data) => {
            res.redirect("/profile")
        })
}

module.exports.addNewUser = (req, res) => {
    res.render("Login")
}

module.exports.arrowToHhome = (req, res) => {
    res.redirect("/")
}

module.exports.logout = (req, res) => {
    req.session.destroy()
    res.redirect("/")
}