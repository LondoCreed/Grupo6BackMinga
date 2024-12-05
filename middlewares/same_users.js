import Author from "../models/Author.js";

export default async (req, res, next) => {
    try {
        let authorID = await Author.findById(req.body.user_id);

        if (!authorID) {
            return res.status(404).json({
                success: false,
                message: "Author not found."
            });
        }

        if (authorID.user_id.equals(req.user._id) || req.user.role === 3) {
            return next();
        }

        return res.status(403).json({
            success: false,
            message: "This author or company belongs to a different user and cannot be accessed or modified."
        });

    } catch (error) {
        next(error);
    }
};
