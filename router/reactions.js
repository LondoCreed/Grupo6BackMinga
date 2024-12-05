import { Router } from "express"
import createReaction from '../controllers/reactions/create.js';
import deleteReaction from '../controllers/reactions/delete.js';
import { allReactions, reactionById } from '../controllers/reactions/read.js';
import updateReaction from '../controllers/reactions/update.js';
import validator from "../middlewares/validator.js";
import reactionSchema from "../schemas/reaction/reactionSchema.js";


const routerReactions = Router()

routerReactions.post('/create', validator(reactionSchema), createReaction);
routerReactions.get('/all', allReactions);
routerReactions.get('/id/:id', reactionById);
routerReactions.put('/update/:id', updateReaction);
routerReactions.delete('/delete/:id', deleteReaction);

export default routerReactions 