import Joi from "joi";

const deleteAuthorSchema = Joi.object({
    _id: Joi.string()
        .length(24)
        .hex()
        .required()
        .messages({
            "string.base": "ID must be a string.",
            "string.empty": "ID cannot be empty.",
            "string.length": "ID must be exactly 24 characters long.",
            "string.hex": "ID must contain only hexadecimal characters.",
            "any.required": "The ID value is required.",
        }),
});

export default deleteAuthorSchema;