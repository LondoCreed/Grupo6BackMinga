import { Router } from "express"
import userRouter from './user.js'
import reactionsRouter from './routerReactions.js'
import mangasRouter from "./mangas.js"
import chaptersRouter from "./chapters.js"

const router = Router()

router.use('/user', userRouter)
router.use('/reactions', reactionsRouter);
router.use('/mangas', mangasRouter)
router.use('/chapter', chaptersRouter);

export default router