import Category from "../../models/Category.js"

const categoryCreated = async (req, res, next) => {
  try {


    await Category.create(req.body)

    return res.status(201).json({ success: true })

  } catch (error) {
    next(error)
  }
}



export { categoryCreated }
