import mongoose from "mongoose"

let url = process.env.URI_MONGO

console.log("la url es: ", url)

async function conexionBD (){
    try {
        await mongoose.connect(process.env.URI_MONGO)
        console.log("Base de datos conectada")
    } catch (error){
        console.log(error)
    }
}

conexionBD ()