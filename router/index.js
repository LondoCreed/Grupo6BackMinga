import { Router } from "express"
import reactionsRouter from './routerReactions.js'

const router = Router()

router.use('/reactions', reactionsRouter);

export default router