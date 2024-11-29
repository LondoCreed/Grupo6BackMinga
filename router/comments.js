import { Router } from "express"
import { allComments } from "../controllers/Comments/read.js"
import { commentCreated } from "../controllers/Comments/create.js"
import { updateComment } from "../controllers/Comments/update.js"
import { deletedComment } from "../controllers/Comments/deleted.js"
import validator from "../middlewares/validator.js"
import schemaComment from "../schemas/comment/create.js"

const routerComment = Router()

routerComment.get("/all", allComments)
routerComment.post("/create",validator(schemaComment), commentCreated)
routerComment.put("/update", updateComment)
routerComment.delete("/delete", deletedComment)

export default routerComment