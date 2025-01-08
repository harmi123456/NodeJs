const schema = require("../model/schema")

module.exports.firstPage = async (req, res) => {
    let data = await schema.find({})
    res.render("index", {data})
}

module.exports.addData = async (req, res) => {
    req.body.image = req.file.path;
    await schema.create(req.body).then((data) => {
        res.redirect("/")
    })
}