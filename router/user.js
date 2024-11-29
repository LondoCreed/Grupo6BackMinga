import { Router } from "express";

//controllers
import allUsers from "../controllers/user/read.js";
import registerUser from "../controllers/user/register.js";
import updateUser from "../controllers/user/update.js";
import deleteUser from "../controllers/user/delete.js";

//middlewares
import validator from "../middlewares/validator.js";

//schemas
import registerSchema from "../schemas/users/register.js";

const router = Router()

router.get('/all', allUsers)
router.post('/register', validator(registerSchema), registerUser)
router.put('/update', updateUser)
router.delete('/delete', deleteUser)

export default router