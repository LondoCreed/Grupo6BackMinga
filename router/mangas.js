import { Router } from "express"
import { all, mangaByID } from "../controllers/mangas/read.js"
import { deleteOne, deleteMany, deleteByID } from "../controllers/mangas/delete.js"
import { updateOne, updateMany, updateByID} from "../controllers/mangas/update.js"
import {create }from "../controllers/mangas/create.js"
import { allMangasSchema, mangaByIDSchema } from "../schemas/mangas/read.js"
import validatorBody from "../middlewares/validatorBody.js"
import validatorParams from "../middlewares/validatorParams.js"
import validatorQuery from "../middlewares/validatorQuery.js"
import { schemaTitle } from "../schemas/mangas/delete.js"
import { createMangasSchema } from "../schemas/mangas/create.js"
const router = Router()

router.get("/all",validatorQuery(allMangasSchema), all)
router.get("/mangaByID/:id",validatorParams(mangaByIDSchema),mangaByID)
router.delete("/deleteOne", validatorBody(schemaTitle),deleteOne) //se borra por descripcion en el body
router.delete("/deleteByID/:id",validatorParams(mangaByIDSchema), deleteByID)
router.delete("/deleteMany", validatorBody(schemaTitle),deleteMany) //se borra por descripcion en el body
router.put("/updateOne/:title", validatorParams(schemaTitle), validatorBody(allMangasSchema),updateOne ) //Condiciones para la búsqueda por params se pueden modificar varios campos
router.put("/updateMany/:title",  validatorParams(schemaTitle), validatorBody(allMangasSchema),updateMany ) // Condiciones para la búsqueda (titulo)
router.put("/updateByID/:id",validatorParams(mangaByIDSchema), updateByID )
router.post("/create",validatorBody(createMangasSchema), create)

export default router