import joi from "joi-oid"

const schemaComment = joi.object({
    charperId:joi.ObjectId(),
    authorId:joi.ObjectId(),
    companyId:joi.ObjectId(),
    message:joi.string().required()
})
export default schemaComment