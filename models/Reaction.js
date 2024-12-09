import { Schema, model } from "mongoose"

let collection = "reactions"
let reactionSchema = new Schema({
  manga_id: {
    type: Schema.Types.ObjectId,
    ref: 'mangas',
    required: true
},
author_id: {
    type: Schema.Types.ObjectId,
    ref: 'Author',
    required: false
},
company_id: {
    type: Schema.Types.ObjectId,
    ref: 'Company',
    required: false
},
reaction: {
    type: String,
    required: true,
    enum: ['like', 'love', 'dislike', 'amazing', null]
}
}, {
timestamps: true
})

let Reaction = model(collection, reactionSchema)
export default Reaction