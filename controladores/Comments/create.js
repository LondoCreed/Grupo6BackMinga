import Comment from "../../models/Comment.js"

const commentCreated = async (req, res,next) => {
  try {

    
    await Comment.create(req.body)
 
    return res.status(201).json({ success: true })
    
  } catch (error) {
 next(error)
  }
}



export {commentCreated}
