import Joi from "joi";

const schema = Joi.object({
    name: Joi.string().required()
        .pattern(/^[A-Za-z\s]+$/)
        .min(3)
        .max(20)
        .messages({
            "string.base": "Name must be a string.",
            "string.empty": "Name cannot be empty.",
            "any.required": "The Name value is required.",
            "string.pattern.base": "Name must contain only letters.",
            "string.min": "Name must be at least 3 characters long.",
            "string.max": "Name must be at most 20 characters long."
        }),
    website: Joi.string().required()
        .uri()
        .messages({
            "string.base": "Website must be a string.",
            "string.empty": "Website cannot be empty.",
            "any.required": "The Website value is required.",
            "string.uri": "Website must be a valid URL."
        }),
    description: Joi.string().required()
        .min(10)
        .max(1000)
        .messages({
            "string.base": "Description must be a string.",
            "string.empty": "Description cannot be empty.",
            "any.required": "The Description value is required.",
            "string.min": "Description must be at least 10 characters long.",
            "string.max": "Description must be at most 1000 characters long."
        }),
    photo: Joi.string().required()
        .uri()
        .messages({
            "string.base": "Photo URL must be a string.",
            "string.empty": "Photo URL cannot be empty.",
            "any.required": "The Photo URL value is required.",
            "string.uri": "Photo must be a valid URL."
        }),
    user_id: Joi.string()
        .length(24)
        .hex()
        .required()
        .messages({
            'string.base': 'ID must be a string.',
            'string.empty': 'ID cannot be empty.',
            'string.length': 'ID must be exactly 24 characters long.',
            'string.hex': 'ID must contain only hexadecimal characters.',
            'any.required': 'The ID value is required.',
        }),
});

export default schema;