import Comment from "../../models/Comment"

const updateComment = async (req, res, next) => {
        try {
            await Comment.updateOne(
                { _id: req.body._id }, 
                req.body       
            )
            return res.status(200).json({ response: 'updated' })   
        } catch (error) {
            next(error)
        }
    }


export {updateComment}