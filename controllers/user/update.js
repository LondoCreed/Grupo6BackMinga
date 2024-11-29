import User from "../../models/User.js";

const update = async (req, res, next) => {
    try {
        let user = req.body
        let update = await User.findByIdAndUpdate(
            user._id,
            user, 
            { new: true }
        )
        return res.status(200).json({
            response: update
        })
        
    } catch (error) {
       console.log(error);
       
    }
}

export default update