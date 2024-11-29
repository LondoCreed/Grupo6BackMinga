import { Schema, model } from "mongoose"

let collection = "Reactions"
let reactionSchema = new Schema({
  manga_id: { 
    type: Schema.Types.ObjectId, 
    ref: 'Manga', 
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
    required: true 
  }
}, {
  timestamps: true
})

let Reaction = model(collection, reactionSchema)
export default Reaction