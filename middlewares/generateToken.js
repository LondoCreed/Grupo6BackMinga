import jwt from 'jsonwebtoken'

export default (req, res, next) => {
    try {
        const email = req.body.email || (req.user && req.user.email);

        if (!email) {
            return res.status(400).json({
                success: false,
                message: "Email is required for token generation"
            });
        }

        const token = jwt.sign(
            { email },
            process.env.SECRET,
            { expiresIn: 60 * 60 * 24 }
        );

        req.token = token;
        return next();
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Token generation failed"
        });
    }
}