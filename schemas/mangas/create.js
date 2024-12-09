import joi from 'joi-oid'

export const createMangasSchema = joi.object({
    author_id: joi.objectId().messages({
        'string.objectId': 'The author ID must be a valid ObjectId',
        'any.invalid': 'Invalid author ID format',
        
    }),
    company_id: joi.objectId().messages({
        'string.objectId': 'The company ID must be a valid ObjectId',
        'any.invalid': 'Invalid company ID format',
    }),
    title: joi.string().min(1).max(255).pattern(/^[a-zA-Z0-9\u00C0-\u017F\s]+$/).required().messages({
        'string.base': 'The title must be a text',
        'string.min': 'The title must be at least 1 character long',
        'string.max': 'The title can be at most 255 characters long',
        'any.required': 'The title field is required'
    }),
    description: joi.string().min(1).pattern(/^[a-zA-Z0-9\u00C0-\u017F\s]+$/).required().messages({
        'string.base': 'The description must be a text',
        'string.min': 'The description must be at least 1 character long',
        'string.pattern.base': 'The name must contain only letters and spaces, no special characters allowed',
        'any.required': 'The description field is required'
    }),
    category_id: joi.objectId().required().messages({
        'string.objectId': 'The category ID must be a valid ObjectId',
        'any.invalid': 'Invalid category ID format',
        'any.required': 'The category_id field is required'
    }),
    cover_photo: joi.string().uri().messages({
        'string.uri': 'The photo must be a valid URL.',
        'string.base': 'The photo must be a string.'
    }),
    atLeastOne: joi.any().valid(null).when('author_id', {
        is: joi.exist(),
        then: joi.forbidden(),
        otherwise: joi.any().valid(null).when('company_id', {
            is: joi.exist(),
            then: joi.forbidden(),
            otherwise: joi.required()
        })
    }).messages({
        'any.required': 'You must provide either an author_id or a company_id.',
        'any.unknown': 'Either author_id or company_id must be provided'
    }),
})