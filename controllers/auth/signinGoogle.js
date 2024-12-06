import User from "../../models/User.js";
import Author from "../../models/Author.js";
import Company from "../../models/Company.js";

export default async (req, res, next) => {
    try {
        if (!req.user || !req.user.email) {
            throw new Error('User data not available');
        }

        const updatedUser = await User.findOneAndUpdate(
            { email: req.user.email },
            { online: true },
            { new: true }
        ).select('-password');

        if (!updatedUser) {
            throw new Error('User not found');
        }

        if (!req.token) {
            throw new Error('Authentication token not generated');
        }
        
        const author = await Author.findOne({ user_id: updatedUser._id });
        const company = await Company.findOne({ user_id: updatedUser._id });

        const userData = {
            email: updatedUser.email,
            photo: updatedUser.photo || null,
            name: updatedUser.name || null,
            _id: updatedUser._id.toString(),
            online: updatedUser.online,
            role: updatedUser.role,
            author_id: author ? author._id.toString() : null,
            company_id: company ? company._id.toString() : null
        };

        const encodedUserData = encodeURIComponent(JSON.stringify(userData));
        
        return res.redirect(
            `http://localhost:5173/auth/google/callback?` +
            `token=${encodeURIComponent(req.token)}&` +
            `user=${encodedUserData}`
        );

    } catch (error) {
        console.error('Google authentication error:', error);
        return res.redirect('http://localhost:5173/signin?error=authentication_failed');
    }
};