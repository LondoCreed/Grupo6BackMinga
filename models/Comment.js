
import { Schema,model } from "mongoose";

let collection = "comments"

let schema = new Schema({
    charperId:{type:Schema.Types.ObjectId, ref:"charpters", required:true},
    authorId:{type:Schema.Types.ObjectId, ref:"authors", required:false},
    companyId:{type:Schema.Types.ObjectId, ref:"companies", required:false},
    message:{type:String,required:true}
})

let Comment = model(collection,schema)


export default Comment