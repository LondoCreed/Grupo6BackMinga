import { Schema, model } from "mongoose";

const collection = "users";

const userSchema = new Schema(
    {
        email: { type: String, required: true },
        password: { type: String, required: true },
        photo: { type: String, default: '' },
        role: { type: Number, default: 0 },
        online: { type: Boolean, default: false, }
    },
    {
        timestamps: true,
    }
    
);
const User = model(collection, userSchema);

export default User