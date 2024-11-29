import { Router } from "express"
import userRouter from './user.js'
import reactionsRouter from './routerReactions.js'
import authorRouter from './author.js'
import companyRouter from './company.js'

const router = Router()

router.use('/user', userRouter)
router.use('/authors', authorRouter)
router.use('/companies', companyRouter)
router.use('/reactions', reactionsRouter);

export default router