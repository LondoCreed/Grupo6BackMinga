import Comment from "../../models/Comment.js"

let allComments= async (req,res,next)=>{
    try {
        
        let all = await Comment.find()
    
        let answer = req
        next(answer)

        return res.status(200).json({
            response:all
        })
        
    } catch (error) {

        return res.status(500).json({
            response: error
        })
    }
    
}





export {allComments}