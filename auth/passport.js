const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const passport = require('passport')
const {getUserById} = require('../db/users')

const opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = 'SecretKey123!@#'

passport.use(new JwtStrategy(opts,async (payload,done)=>{
    const user = await getUserById(payload.id)
    if(user){
        return done(null,user)
    }else{
        return done(null,null)
    }
}))
