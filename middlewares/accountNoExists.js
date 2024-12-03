import User from "../models/User.js";

export default async (req, res, next) => {
    try {
        console.log("Searching user with the mail:", req.body.email);
        let account = await User.findOne({ email: req.body.email });

        if (account) {
            console.log("User found:", account);
            req.user = {
                name: account.name,
                email: account.email,
                password: account.password,
                country: account.country,
                online: account.online,
                firstName: account.firstName,
                lastname: account.lastname,
                photo: account.photo,
            };
            return next();
        }
        return res.status(400).json({
            success: false,
            message: "User does not exist",
        });
    } catch (error) {
        next(error);
    }
};