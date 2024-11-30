import Category from "../../models/Category.js"

const deletedCategory = async (req, res, next) => {
        try {
           
            let deleted = await Category.deleteOne(
                { _id: req.body._id }
            )
            return res.status(200).json({ response: deleted }) 
        } catch (error) {
            next(error)
        }
    }


export {deletedCategory}