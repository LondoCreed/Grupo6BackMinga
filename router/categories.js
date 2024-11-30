import { Router } from "express"
// import { categoryCreated } from "../controllers/categories/create.js"
// import { allCategories } from "../controllers/categories/read.js"
// import {updateCategory} from "../controllers/categories/update.js"
// import {deletedCategory} from "../controllers/categories/deleted.js"
import validator from "../middlewares/validator.js"
import schemaCategory from "../schemas/category/create.js"

const routerCategory = Router()

// routerCategory.get("/all", allCategories)
// routerCategory.post("/create", validator(schemaCategory), categoryCreated)
// routerCategory.put("/update", updateCategory)
// routerCategory.delete("/delete", deletedCategory)

export default routerCategory