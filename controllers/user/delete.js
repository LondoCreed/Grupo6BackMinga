import User from "../../models/User.js";

let deleteUser = async (req, res, next) => {
    try {
        let deleteUserId = await User.findByIdAndDelete(req.body._id);

        return res.status(200).json({
            response: deleteUserId
        })
    } catch (error) {
        next(error)
    }
}

export default deleteUser