import Author from "../../models/Author.js";

const getAuthorById = async (req, res, next) => {
    try {
        const { id } = req.params;

        const author = await Author.findById(id);

        if (!author) {
            return res.status(404).json({
                success: false,
                message: "Author not found"
            });
        }

        return res.status(200).json({
            success: true,
            response: author
        });
    } catch (error) {
        next(error);
    }
};

export default getAuthorById;