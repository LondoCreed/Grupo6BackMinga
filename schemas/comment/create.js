import Joi from "joi-oid";

const schemaComment = Joi.object({
    chapterId: Joi.string()
        .length(24)
        .hex()
        .required()
        .messages({
            'string.base': 'The chapter ID must be a string.',
            'string.empty': 'The chapter ID cannot be empty.',
            'string.length': 'The chapter ID must be exactly 24 characters long.',
            'string.hex': 'The chapter ID must contain only hexadecimal characters.',
            'any.required': 'The chapter ID is required.',
        }),

    authorId: Joi.string()
        .length(24)
        .hex()
        .optional()
        .messages({
            'string.base': 'The author ID must be a string.',
            'string.length': 'The author ID must be exactly 24 characters long.',
            'string.hex': 'The author ID must contain only hexadecimal characters.',
        }),

    companyId: Joi.string()
        .length(24)
        .hex()
        .optional()
        .messages({
            'string.base': 'The company ID must be a string.',
            'string.length': 'The company ID must be exactly 24 characters long.',
            'string.hex': 'The company ID must contain only hexadecimal characters.',
        }),

    message: Joi.string()
        .min(5)
        .max(500)
        .required()
        .messages({
            'string.min': 'The message must be at least 5 characters long.',
            'string.max': 'The message cannot be more than 500 characters long.',
            'any.required': 'The message is required.',
        }),
});

export default schemaComment;
