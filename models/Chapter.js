import { Schema, model } from "mongoose"  

let collection = 'chapters'

let schema = new Schema({
    manga_id: {type: Schema.Types.ObjectId, ref:'mangas', required:true},
    title: {type:String, required:true},
    cover_photo: {type:String/* , required:true */},
    pages: {type:[String], required:true},
    order: {type:Number, required:true}
}, {
timestamps: true, 
})

let Chapter = model(collection, schema)

export default Chapter