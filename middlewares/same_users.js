import Author from "../models/Author.js";

export default async (req, res, next) => {
    let authhorID = await Author.findById(req.body.user_id)
    if (authhorID.user_id.equals(req.user._id)) {
        next()
    }
    return res.status(403).json({ 
        success: false,
        message: "This author or company belongs to a different user and cannot be accessed or modified."
     });




}