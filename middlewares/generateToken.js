import jwt from 'jsonwebtoken'

export default (req, res, next) => {
    try {
        const email = req.body.email || (req.user && req.user.email);

        if (!email) {
            if (req.user) {
                return res.redirect('http://localhost:5173/signin?error=token_generation_failed');
            }
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
        if (req.user) {
            return res.redirect('http://localhost:5173/signin?error=token_generation_failed');
        }
        return res.status(500).json({
            success: false,
            message: "Token generation failed"
        });
    }
}