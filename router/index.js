import { Router } from "express"
import userRouter from './user.js'
import reactionsRouter from './routerReactions.js'

const router = Router()

router.use('/user', userRouter)
router.use('/reactions', reactionsRouter);

export default router