import { Schema, model } from "mongoose";

const collection = "companies"

const companySchema = new Schema(
    {
        name: { type: String, required: true },
        website: { type: String, required: true },
        description: { type: String, required: true },
        photo: { type: String, required: true },
        user_id: { type: Schema.Types.ObjectId, ref: 'users', required: true },
        active: { type: Boolean, default: false, required: true },
    },
    {
        timestamps: true
    }
)

const Company = model(collection, companySchema)

export default Company  