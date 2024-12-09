import Joi from "joi-oid"

// Esquema para los parámetros de búsqueda de todos los capítulos
export const allChaptersSchema = Joi.object({
    manga_id: Joi.objectId().messages({
        'string.objectId': 'The manga ID must be a valid ObjectId',
        'any.invalid': 'Invalid manga ID format',
    }),
    title: Joi.string().min(1).max(255).pattern(/^[a-zA-Z0-9\u00C0-\u017F\s]+$/).messages({
        'string.base': 'The title must be a text',
        'string.min': 'The title must be at least 1 character long',
        'string.max': 'The title can be at most 255 characters long',
        'string.pattern.base': 'The title must contain only letters, numbers, and spaces, no special characters allowed',
    }),
    pages: Joi.array().items(Joi.string().uri().required()).min(1).messages({
        'array.base': 'Pages must be an array of strings',
        'array.min': 'At least one page URL is required',
        'string.uri': 'Each page must be a valid URL',
    }),
    cover_photo: Joi.string().uri().optional().messages({
        'string.uri': 'The cover photo must be a valid URL (if provided)',
        'string.base': 'The cover photo must be a string',
    }),
    order: Joi.number().optional().messages({
        'number.base': 'The order must be a number',
        'number.integer': 'Order must be an integer',
    }),
}).messages({
    'object.unknown': 'Invalid query parameter provided',
})

// Esquema para el parámetro de búsqueda por ID de capítulo
export const chapterByIDSchema = Joi.object({
    id: Joi.objectId().required().messages({
        'string.objectId': 'Chapter ID must be a valid ObjectId',
        'any.required': 'Chapter ID is required',
    }),
}).messages({
    'object.unknown': 'Invalid parameter provided',
})
