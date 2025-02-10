const passport = require("passport")
const localst = require("passport-local").Strategy

const userSchema = require("../model/schema")

passport.use(
    "local",
    new localst(
        { usernameField: "email" },
        async (emai, password, done) => {
            let admin = await userSchema.findOne({ email: emai})

            if(admin) {
                if(admin.password == password) {
                    return done(null, admin)
                } else {
                    return done(null, false)
                }
            } else {
                return done(null, false)
            }

        }
    )
)

passport.serializeUser((user, done) => {
    done(null, user.id)
})

passport.deserializeUser(async (userId, done) => {
    let admin = await userSchema.findById(userId)
    done(null, admin)
})


passport.checkAuth = (req, res, next) => {
    if(req.isAuthenticated()) {
        next();
    } else {
        res.redirerct("/Login")
    }
}


passport.AuthenticatedUser = (req, res, next) => {
    if(req.isAuthenticated()) {
        res.locals.user = req.user
    }
    next();
}


module.exports = passport