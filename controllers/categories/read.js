import Category from "../../models/Category.js"

let allCategories= async (req,res,next)=>{
    try {
        
        let all = await Category.find()
    
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





export {allCategories}