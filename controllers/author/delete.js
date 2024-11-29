import Author from "../../models/Author.js"

const deleteAuthor = async (req, res, next) => {
    try {
        const deleted = await Author.findByIdAndDelete(req.body._id)
        
        return res.status(200).json({
            success: true,
            response: deleted,
            message: "Author successfully deleted"
        })

    } catch (error) {
        next(error)
    }
}

export default deleteAuthor