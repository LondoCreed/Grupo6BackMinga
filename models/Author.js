import { Schema, model } from "mongoose";

const collection = "authors"

const authorSchema = new Schema(
{
    name: { type: String, required: true },
    last_name: { type: String, required: true },
    city: { type: String, required: true },
    country: { type: String, required: true },
    date: { type: Date, required: true },
    photo: { type: String, required: true },
    user_id: { type: Schema.Types.ObjectId, ref: 'users', required: true },
}, {
    timestamps: true
})

const Author = model(collection, authorSchema)

export default Author