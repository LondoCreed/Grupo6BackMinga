
import User from '../../models/User.js'

let registerUser = async (req, res, next) => {
    try {
        let user = req.body;
        user.online = true;
        user.role = "0";

        let newUser = await User.create(user);

        return res.status(201).json({
            success: true,
            response: {
                user: {
                    email: newUser.email,
                    photo: newUser.photo,
                    online: true
                },
                token: req.token
            },
            message: 'User registered successfully'
        });
    } catch (error) {
        next(error);
    }
};



export default registerUser;