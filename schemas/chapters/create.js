import Joi from "joi-oid";

// Esquema para los parámetros de búsqueda de todos los capítulos
export const createChaptersSchema = Joi.object({
    manga_id: Joi.objectId().required().messages({
        'string.objectId': 'The manga ID must be a valid ObjectId',
        'any.invalid': 'Invalid manga ID format',
        'any.required': 'Manga ID is required',
    }),
    title: Joi.string().min(1).max(255).pattern(/^[a-zA-Z0-9\u00C0-\u017F\s]+$/).required().messages({
        'string.base': 'The title must be a text',
        'string.min': 'The title must be at least 1 character long',
        'string.max': 'The title can be at most 255 characters long',
        'string.pattern.base': 'The title must contain only letters, numbers, and spaces, no special characters allowed',
        'any.required': 'The title is required',
    }),
    cover_photo: Joi.string().uri().optional().messages({
        'string.uri': 'Cover photo must be a valid URL (if provided)',
        'string.base': 'Cover photo must be a string',
    }),
    pages: Joi.array().items(Joi.string().uri().required()).min(1).required().messages({
        'array.base': 'Pages must be an array of strings',
        'array.min': 'At least one page URL is required',
        'string.uri': 'Each page must be a valid URL',
        'any.required': 'Pages are required',
    }),
    order: Joi.number().integer().required().messages({
        'number.base': 'Order must be a number',
        'number.integer': 'Order must be an integer',
        'any.required': 'Order is required',
    }),
}).required().messages({
    'object.unknown': 'Invalid query parameter provided',
})