import passport from "passport"
import { Strategy as GoogleStrategy } from "passport-google-oauth20"
import bcryptjs from 'bcryptjs'
import User from "../models/User.js"

export default passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: process.env.GOOGLE_URI_BACK
        },
        async (accessToken, refreshToken, profile, done) => {
            try {
                let user = await User.findOne({ email: profile.emails[0].value })

                if (user) {
                    user.online = true
                    await user.save()
                    return done(null, user)
                }

                const hashPassword = bcryptjs.hashSync(
                    profile.id,
                    10
                )

                const newUser = await User.create({
                    email: profile.emails[0].value,
                    password: hashPassword,
                    photo: profile.photos[0].value,
                    role: null,
                    online: true
                })

                return done(null, newUser)

            } catch (error) {
                return done(error, null)
            }
        }
    )
)