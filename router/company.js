import { Router } from "express";

//controllers
import allCompanies from "../controllers/company/read.js";
import registerCompany from "../controllers/company/register.js";
import updateCompany from "../controllers/company/update.js";
import deleteCompany from "../controllers/company/delete.js";

//middlewares
import validator from "../middlewares/validator.js";
import passport from "../middlewares/passport.js";
import sameUser from "../middlewares/same_users.js";
import isAdmin from "../middlewares/is_admin.js";

//schemas
import companySchema from "../schemas/companies/companySchema.js";
import deleteCompanySchema from "../schemas/companies/delete.js";

const companyRouter = Router()

companyRouter.get('/all',passport.authenticate('jwt', { session: false }),isAdmin, allCompanies)
companyRouter.post('/register',passport.authenticate('jwt', { session: false }), validator(companySchema), registerCompany)
companyRouter.put('/update',passport.authenticate('jwt', { session: false }),sameUser, validator(companySchema), updateCompany)
companyRouter.delete('/delete',passport.authenticate('jwt', { session: false }),sameUser, validator(deleteCompanySchema), deleteCompany)

export default companyRouter