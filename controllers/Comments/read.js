import Comment from "../../models/Comment.js"

let allComments= async (req,res,next)=>{
    try {
        
        let all = await Comment.find()
        return res.status(200).json({
            response:all
        })
        
    } catch (error) {

        next(error)
    }
    
}





export {allComments}