import { Router } from "express";
import allCompanies from "../controllers/company/read.js";
import registerCompany from "../controllers/company/register.js";
import updateCompany from "../controllers/company/update.js";
import deleteCompany from "../controllers/company/delete.js";
import validator from "../middlewares/validator.js";
import companySchema from "../schemas/companies/companySchema.js";
import deleteCompanySchema from "../schemas/companies/delete.js";

const companyRouter = Router()

companyRouter.get('/all', allCompanies)
companyRouter.post('/register', validator(companySchema), registerCompany)
companyRouter.put('/update', validator(companySchema), updateCompany)
companyRouter.delete('/delete',validator(deleteCompanySchema), deleteCompany)

export default companyRouter