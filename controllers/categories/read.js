import Category from "../../models/Category.js"

let allCategories = async (req, res, next) => {
    try {

        let all = await Category.find()
        return res.status(200).json({
            response: all
        })

    } catch (error) {
        next(error)
    }

}
export { allCategories }