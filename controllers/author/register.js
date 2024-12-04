import Author from '../../models/Author.js';
import User from '../../models/User.js';

const registerAuthor = async (req, res, next) => {
    try {
        let { user_id, ...authorData } = req.body;

        let user = await User.findById(user_id);
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found."
            });
        }
        let haveAuthor = await Author.findOne({ user_id });
        if (haveAuthor) {
            return res.status(400).json({
                success: false,
                message: "User already has an author."
            });
        }


        user = await User.findByIdAndUpdate(
            user_id,
            { role: 1 },
            { new: true }
        );

        let createdAuthor = await Author.create({...authorData, user_id, active: true   });

        return res.status(201).json({
            success: true,
            message: "Author successfully created",
            response: createdAuthor
        });

    } catch (error) {
        next(error);
    }
};

export default registerAuthor;
