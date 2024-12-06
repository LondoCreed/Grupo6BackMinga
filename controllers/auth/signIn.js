import User from "../../models/User.js";
import Author from "../../models/Author.js";
import Company from "../../models/Company.js";

export default async (req, res, next) => {
    try {
        const email = req.body.email || (req.user && req.user.email);

        if (!email) {
            return res.status(400).json({
                success: false,
                message: "Email is required",
            });
        }

        const updatedUser = await User.findOneAndUpdate(
            { email: email },
            { online: true },
            { new: true }
        );

        if (!updatedUser) {
            return res.status(404).json({
                success: false,
                message: "User not found",
            });
        }

        if (!req.token) {
            return res.status(500).json({
                success: false,
                message: "Token generation failed",
            });
        }

        let authorId = null;
        let companyId = null;

        const author = await Author.findOne({ user_id: updatedUser._id });
        if (author) {
            authorId = author._id;
        }

        const company = await Company.findOne({ user_id: updatedUser._id });
        if (company) {
            companyId = company._id;
        }

        return res.status(200).json({
            success: true,
            message: "Signed in successfully",
            response: {
                user: {
                    _id: updatedUser._id.toString(),
                    email: updatedUser.email,
                    password: updatedUser.password,
                    photo: updatedUser.photo,
                    role: updatedUser.role,
                    online: updatedUser.online,
                    author_id: authorId?.toString(),
                    company_id: companyId?.toString(),
                },
                token: req.token,
            },
        });
    } catch (error) {
        next(error);
    }
};