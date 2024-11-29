import { Router } from "express"
import userRouter from './user.js'
import reactionsRouter from './routerReactions.js'
import authorRouter from './author.js'
import companyRouter from './company.js'
import routerCategory from "./categories.js"
import routerComment from "./comments.js"
import mangasRouter from "./mangas.js"
import chaptersRouter from "./chapters.js"

const router = Router()

router.use('/user', userRouter)
router.use('/authors', authorRouter)
router.use('/companies', companyRouter)
router.use('/reactions', reactionsRouter);
router.use('/mangas', mangasRouter)
router.use('/chapter', chaptersRouter);
router.use("/categories", routerCategory)
router.use("/comments",routerComment)

export default router