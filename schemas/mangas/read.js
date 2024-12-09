import Joi from "joi-oid"

export const allMangasSchema = Joi.object({
    author_id: Joi.objectId().messages({
        'string.objectId': 'The author ID must be a valid ObjectId',
        'any.invalid': 'Invalid author ID format',
    }),
    company_id: Joi.objectId().messages({
        'string.objectId': 'The company ID must be a valid ObjectId',
        'any.invalid': 'Invalid company ID format',
    }),
    title: Joi.string().min(1).max(255).pattern(/^[a-zA-Z0-9\u00C0-\u017F\s]+$/).messages({
        'string.base': 'The title must be a text',
        'string.min': 'The title must be at least 1 character long',
        'string.max': 'The title can be at most 255 characters long',
    }),
    description: Joi.string().min(1).pattern(/^[a-zA-Z0-9\u00C0-\u017F\s]+$/).messages({
        'string.base': 'The description must be a text',
        'string.min': 'The description must be at least 1 character long',
        'string.pattern.base': 'The name must contain only letters and spaces, no special characters allowed',
    }),
    category_id: Joi.objectId().messages({
        'string.objectId': 'The category ID must be a valid ObjectId',
        'any.invalid': 'Invalid category ID format',
    }),
}).messages({
    'object.unknown': 'Invalid query parameter provided',
})

export const mangaByIDSchema = Joi.object({
    id: Joi.objectId().required().messages({
        'string.objectId': 'Manga ID must be a valid ObjectId',
        'any.required': 'Manga ID is required',
    }),
}).messages({
    'object.unknown': 'Invalid parameter provided',
})
