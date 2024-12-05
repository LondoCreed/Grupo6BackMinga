import { Router } from "express"

//controllers
import { categoryCreated } from "../controllers/categories/create.js"
import { allCategories } from "../controllers/categories/read.js"
import {updateCategory} from "../controllers/categories/update.js"
import {deletedCategory} from "../controllers/categories/deleted.js"

//middlewares
import validator from "../middlewares/validator.js"
import isAdmin from "../middlewares/is_admin.js"

//schemas
import schemaCategory from "../schemas/category/create.js"

const routerCategory = Router()

routerCategory.get("/all",isAdmin, allCategories)
routerCategory.post("/create", validator(schemaCategory),isAdmin, categoryCreated)
routerCategory.put("/update",isAdmin, updateCategory)
routerCategory.delete("/delete",isAdmin, deletedCategory)

export default routerCategory