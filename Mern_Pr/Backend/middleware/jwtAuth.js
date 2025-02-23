const jwt = require("jsonwebtoken")

const auth = (req, res, next) => {
    let token = req.header("Authorization")

    if(!token) {
        return res.status(200).json({msg : "Token Not Found"})
    }

    let newToken = token.slice(7, token.length)
    console.log(newToken)

    let decode = jwt.verify(newToken, "rnw")
    console.log(decode)

    next();
}

module.exports = auth