const { text } = require("express");
const nodemailer = require("nodemailer")

const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "harmipagada@gmail.com",
        pass: "wskezjheirgfaxun"
    },

});


module.exports.sendOtp = (to, otp) => {

    let mailOptions = {
        from: "harmipagada4@gmail.com",
        to: to,
        subject: "Your Password reset OTP ",
        text: `Your OTP is ${otp}`
    }

    transport.sendMail(mailOptions, (err) => {
        err ? console.log(err) : console.log("Otp Sendded Successfully")
    })
}