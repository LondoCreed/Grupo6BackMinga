import Comment from "../../models/Comment.js"

const updateComment = async (req, res, next) => {
    try {
        console.log("req.body: ", req.body);
        let { message, _id } = req.body
        console.log(message, _id);
        
         let update = await Comment.updateOne(
            {_id: _id},
            {message: message}
        )
        return res.status(200).json({ 
            success: true,
            response: update 
        })
    } catch (error) {
        next(error)
    }
}


export { updateComment }