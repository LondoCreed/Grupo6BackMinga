import { Router } from "express"
import { allChapters, chapterByID } from "../controllers/chapters/read.js"
import { deleteOne, deleteMany, deleteByID } from "../controllers/chapters/delete.js"
import { updateOne, updateMany, updateByID} from "../controllers/chapters/update.js"
import {create, createMany} from "../controllers/chapters/create.js"
const router = Router()

router.get("/all", allChapters)
router.get("/chapterByID/:id",chapterByID)
router.delete("/deleteOne", deleteOne) //se borra por descripcion en el body
router.delete("/deleteByID/:id", deleteByID)
router.delete("/deleteMany", deleteMany) //se borra por descripcion en el body
router.put("/updateOne/:title", updateOne ) //Condiciones para la búsqueda por params se pueden modificar varios campos
router.put("/updateMany/:title", updateMany ) // Condiciones para la búsqueda (titulo)
router.put("/updateByID/:id", updateByID )
router.post("/create", create)
router.post("/createMany", createMany)

export default router