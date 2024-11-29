import mongoose from "mongoose"

let url = process.env.URI_MONGO

console.log("URL: ", url)

async function DBconnection (){
    try {
        await mongoose.connect(process.env.URI_MONGO)
        console.log("Database connected")
    } catch (error){
        console.log(error)
    }
}

DBconnection ()