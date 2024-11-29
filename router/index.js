import { Router } from "express"
import routerCategory from "./categories.js"
import routerComment from "./comments.js"

const router = Router()

router.use("/categories", routerCategory)
router.use("/comments",routerComment)

export default router