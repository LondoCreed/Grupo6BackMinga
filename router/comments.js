import { Router } from "express"
import { allComments, commentsChapter } from "../controllers/comments/read.js"
import { commentCreated } from "../controllers/comments/create.js"
import { updateComment } from "../controllers/comments/update.js"
import { deletedComment } from "../controllers/comments/deleted.js"
import validator from "../middlewares/validator.js"
import schemaComment from "../schemas/comment/create.js"

const routerComment = Router()

routerComment.get("/all", allComments)
routerComment.get("/comentschapter/:id", commentsChapter)
routerComment.post("/create",validator(schemaComment), commentCreated)
routerComment.put("/update", updateComment)
routerComment.delete("/delete", deletedComment)

export default routerComment