import Author from "../../models/Author.js";
import User from "../../models/User.js";

const allAuthors = async (req, res, next) => {
    try {
        const { author, user_id } = req.query;
        let query = {};
        
        if (author) {
            query.author = { $regex: author, $options: "i" };
        }

        if (user_id) {
            query.user_id = user_id;
        }

        const authors = await Author.find(query).populate('user_id');

        return res.status(200).json({
            success: true,
            response: authors
        });

    } catch (error) {
        next(error);
    }
};

export default allAuthors;
