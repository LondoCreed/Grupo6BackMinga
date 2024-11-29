import joi from "joi-oid"

const schemaComment = joi.object({
    charperId:joi.string(),
    authorId:joi.string(),
    companyId:joi.string(),
    message:joi.string().required()
})
export default schemaComment