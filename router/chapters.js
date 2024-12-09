import { Router } from "express"
import { allChapters, chapterByID } from "../controllers/chapters/read.js"
import { deleteOne, deleteMany, deleteByID } from "../controllers/chapters/delete.js"
import { updateOne, updateMany, updateByID} from "../controllers/chapters/update.js"
import {create} from "../controllers/chapters/create.js"
import validatorBody from "../middlewares/validatorBody.js"
import validatorParams from "../middlewares/validatorParams.js"
import validatorQuery from "../middlewares/validatorQuery.js"
import { allChaptersSchema, chapterByIDSchema } from "../schemas/chapters/read.js"
import { schemaTitle} from "../schemas/chapters/delete.js"
import { createChaptersSchema } from "../schemas/chapters/create.js"
const router = Router()

router.get("/all",validatorQuery(allChaptersSchema), allChapters)
router.get("/chapterByID/:id",validatorParams(chapterByIDSchema),chapterByID)
router.delete("/deleteOne", validatorBody(schemaTitle), deleteOne) //se borra por titulo en el body
router.delete("/deleteByID/:id", validatorParams(chapterByIDSchema), deleteByID)
router.delete("/deleteMany", /* validatorBody(schemaTitleAndMangaID), */ deleteMany) //se borra por titulo en el body
router.put("/updateOne/:title", validatorParams(schemaTitle), validatorBody(allChaptersSchema), updateOne ) //Condiciones para la búsqueda por params se pueden modificar varios campos
router.put("/updateMany/:title",validatorParams(schemaTitle), validatorBody(allChaptersSchema), updateMany ) // Condiciones para la búsqueda (titulo)
router.put("/updateByID/:id", validatorParams(chapterByIDSchema), updateByID )
router.post("/create", validatorBody(createChaptersSchema), create)

export default router