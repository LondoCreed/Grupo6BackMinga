import { Router } from "express"
import { allCategories } from "../controllers/Categories/read.js"
import { categoryCreated } from "../controllers/Categories/create.js"
import {updateCategory} from "../controllers/Categories/update.js"
import {deletedCategory} from "../controllers/Categories/deleted.js"
import validator from "../middlewares/validator.js"
import schemaCategory from "../schemas/category/create.js"

const routerCategory = Router()

routerCategory.get("/all", allCategories)
routerCategory.post("/create", validator(schemaCategory), categoryCreated)
routerCategory.put("/update", updateCategory)
routerCategory.delete("/delete", deletedCategory)

export default routerCategory