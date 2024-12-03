import User from '../../models/User.js';

export default async (req, res, next) => {
    try {
        const { email } = req.user;
        await User.findOneAndUpdate(
            { email },
            { online: false }
        );

        return res.status(200).json({
            success: true,
            message: 'Successfully closed session'
        });
    } catch (error) {
        next(error)
    }
};