import { Router } from "express";

//controllers
import allAuthors from "../controllers/author/read.js";
import registerAuthor from "../controllers/author/register.js";
import updateAuthor from "../controllers/author/update.js";
import deleteAuthor from "../controllers/author/delete.js";

//middlewares
import validator from "../middlewares/validator.js";
import passport from "../middlewares/passport.js";
import sameUser from "../middlewares/same_users.js";
import isAdmin from "../middlewares/is_admin.js";

//schemas
import authorSchema from "../schemas/authors/authorSchema.js";
import deleteAuthorSchema from "../schemas/authors/delete.js";

const authorRouter = Router()

authorRouter.get('/all',  allAuthors)//hay que mirar si necesitamos otro endpoint y middlawre par evitar que solo el admin vea esto
authorRouter.post('/register',  validator(authorSchema), registerAuthor)
authorRouter.put('/update',  validator(authorSchema),  updateAuthor)
authorRouter.delete('/delete',  validator(deleteAuthorSchema),  deleteAuthor)

export default authorRouter
