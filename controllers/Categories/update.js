import Category from "../../models/Category.js"

const updateCategory = async (req, res, next) => {
        try {
            await Category.updateOne(
                { _id: req.body._id }, 
                req.body       
            )
            return res.status(200).json({ response: 'updated' })   
        } catch (error) {
            next(error)
        }
    }

export {updateCategory}