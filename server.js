import express from "express"
import "dotenv/config.js" //conexion a la base de datos
import "./config/database.js"
import cors from "cors"
import morgan from "morgan"
import indexRouter from "./router/index.js"
import not_found_handler from "./middlewares/not_found_handler.js"
import error_handler from "./middlewares/error_handler.js"
import bad_request_handler from "./middlewares/bad_request_handler.js"

const server = express()
const PORT = process.env.PORT || 8080
const ready = () => console.log("server ready in port:"+PORT)

server.use(express.json()) //permite trabajar con formato json en entrada y salida
server.use(express.urlencoded({ extended: true })) //permite por medio de la url recibir peticiones complejas o sea recibir queries o parametros
server.use(cors()) //no deja pasar a cualquiera
server.use(morgan('dev'))
server.use('/api', indexRouter)
server.use(not_found_handler)
server.use(error_handler)
server.use(bad_request_handler)

server.listen(PORT, ready)