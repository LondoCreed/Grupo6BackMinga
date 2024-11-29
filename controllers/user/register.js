
import User from "../../models/User.js";

let registerUser = async (req, res, next) => {
    try {
        let user = req.body;
        user.online = true;
        user.role = "0";

        let created = await User.create(user);
        return res.status(201).json({
            user: created
        })
    } catch (error) {
        console.log(error);
        
    }
}

export default registerUser