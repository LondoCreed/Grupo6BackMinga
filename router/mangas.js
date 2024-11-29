import { Router } from "express"
import { all, mangaByID } from "../controllers/manga/read.js"
import { deleteOne, deleteMany, deleteByID } from "../controllers/manga/delete.js"
import { updateOne, updateMany, updateByID} from "../controllers/manga/update.js"
import create from "../controllers/manga/create.js"
const router = Router()

router.get("/all", all)
router.get("/mangaByID/:id",mangaByID)
router.delete("/deleteOne", deleteOne) //se borra por descripcion en el body
router.delete("/deleteByID/:id", deleteByID)
router.delete("/deleteMany", deleteMany) //se borra por descripcion en el body
router.put("/updateOne/:title", updateOne ) //Condiciones para la búsqueda por params se pueden modificar varios campos
router.put("/updateMany/:title", updateMany ) // Condiciones para la búsqueda (titulo)
router.put("/updateByID/:id", updateByID )
router.post("/create", create)

export default router