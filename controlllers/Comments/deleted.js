import Comment from "../../models/Comment.js"

const deletedComment = async (req, res, next) => {
        try {
           
            let deleted = await Comment.deleteOne(
                { _id: req.body._id }
            )
            return res.status(200).json({ response: deleted }) 
        } catch (error) {
            next(error)
        }
    }


export {deletedComment}