import joi from "joi-oid"

const schemaCategory = joi.object({
    name:joi.string().required(),
    color:joi.string().required(),
    hover:joi.string().required(),
    description:joi.string().required(),
    coverPhoto:joi.string().required(),
    characterPhoto:joi.string().required(),
    adminId:joi.string(),
    createAt:joi.date(),
    updateAt:joi.date()
})
export default schemaCategory