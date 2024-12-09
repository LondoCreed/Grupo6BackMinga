import Comment from "../../models/Comment.js"

const deletedComment = async (req, res, next) => {
    try {
        let deleted = await Comment.findByIdAndDelete(req.params.id)
        return res.status(200).json({
            sucess: true,
            response: deleted

        })
    } catch (error) {
        next(error)
    }
}


export { deletedComment }