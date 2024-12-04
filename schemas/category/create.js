import Joi from 'joi-oid';

const schemaCategory = Joi.object({
    name: Joi.string().required()
        .min(3)
        .max(50)
        .messages({
            'string.base': 'Name must be a string.',
            'string.empty': 'Name cannot be empty.',
            'string.min': 'Name must be at least 3 characters long.',
            'string.max': 'Name must be at most 50 characters long.',
            'any.required': 'The Name value is required.',
        }),

    color: Joi.string().required()
        .pattern(/^#[0-9A-Fa-f]{6}$/)
        .messages({
            'string.base': 'Color must be a string.',
            'string.empty': 'Color cannot be empty.',
            'string.pattern.base': 'Color must be a valid hex color code.',
            'any.required': 'The Color value is required.',
        }),

    hover: Joi.string().required()
        .pattern(/^#[0-9A-Fa-f]{6}$/)
        .messages({
            'string.base': 'Hover color must be a string.',
            'string.empty': 'Hover color cannot be empty.',
            'string.pattern.base': 'Hover color must be a valid hex color code.',
            'any.required': 'The Hover color value is required.',
        }),

    description: Joi.string().required()
        .min(10)
        .max(500)
        .messages({
            'string.base': 'Description must be a string.',
            'string.empty': 'Description cannot be empty.',
            'string.min': 'Description must be at least 10 characters long.',
            'string.max': 'Description must be at most 500 characters long.',
            'any.required': 'The Description value is required.',
        }),

    coverPhoto: Joi.string().required()
        .uri()
        .messages({
            'string.base': 'Cover photo must be a string.',
            'string.empty': 'Cover photo cannot be empty.',
            'string.uri': 'Cover photo must be a valid URL.',
            'any.required': 'The Cover photo value is required.',
        }),

    characterPhoto: Joi.string().required()
        .uri()
        .messages({
            'string.base': 'Character photo must be a string.',
            'string.empty': 'Character photo cannot be empty.',
            'string.uri': 'Character photo must be a valid URL.',
            'any.required': 'The Character photo value is required.',
        }),

    admin_id: Joi.objectId()
        .messages({
            'string.base': 'Admin ID must be a valid ObjectId string.',
            'string.empty': 'Admin ID cannot be empty.',
            'any.required': 'The Admin ID value is required.',
        })
});

export default schemaCategory;
