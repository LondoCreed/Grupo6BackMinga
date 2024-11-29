import { Router } from "express";
import allAuthors from "../controllers/author/read.js";
import registerAuthor from "../controllers/author/register.js";
import updateAuthor from "../controllers/author/update.js";
import deleteAuthor from "../controllers/author/delete.js";
import validator from "../middlewares/validator.js";
import authorSchema from "../schemas/authors/authorSchema.js";
import deleteAuthorSchema from "../schemas/authors/delete.js";

const authorRouter = Router()

authorRouter.get('/all', allAuthors)
authorRouter.post('/register', validator(authorSchema), registerAuthor)
authorRouter.put('/update', validator(authorSchema), updateAuthor)
authorRouter.delete('/delete',validator(deleteAuthorSchema), deleteAuthor)

export default authorRouter
