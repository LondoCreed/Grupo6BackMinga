import Joi from "joi";

const Schema = Joi.object({
    name: Joi.string().required()
        .pattern(/^[A-Za-z\s]+$/)
        .min(3)
        .max(20)
        .messages({
            'string.base': 'Name must be a string.',
            'string.empty': 'Name cannot be empty.',
            'string.pattern.base': 'Name must contain only letters.',
            'string.min': 'Name must be at least 3 characters long.',
            'string.max': 'Name must be at most 20 characters long.',
            'any.required': 'The Name value is required.',
        }),
    last_name: Joi.string().required()
        .pattern(/^[A-Za-z\s]+$/)
        .min(3)
        .max(20)
        .messages({
            'string.base': 'Last name must be a string.',
            'string.empty': 'Last name cannot be empty.',
            'string.pattern.base': 'Last name must contain only letters.',
            'string.min': 'Last name must be at least 3 characters long.',
            'string.max': 'Last name must be at most 20 characters long.',
            'any.required': 'The Last name value is required.',
        }),
    city: Joi.string().required()
        .pattern(/^[A-Za-z\s]+$/)
        .min(2)
        .max(30)
        .messages({
            'string.base': 'City must be a string.',
            'string.empty': 'City cannot be empty.',
            'string.pattern.base': 'City must contain only letters.',
            'string.min': 'City must be at least 3 characters long.',
            'string.max': 'City must be at most 20 characters long.',
            'any.required': 'The City value is required.',
        }),
    country: Joi.string().required()
        .pattern(/^[A-Za-z\s]+$/)
        .min(2)
        .max(30)
        .messages({
            'string.base': 'Country must be a string.',
            'string.empty': 'Country cannot be empty.',
            'string.pattern.base': 'Country must contain only letters.',
            'string.min': 'Country must be at least 3 characters long.',
            'string.max': 'Country must be at most 20 characters long.',
            'any.required': 'The Country value is required.',
        }),
    date: Joi.date().required()
        .messages({
            'date.base': 'Date must be a valid date.',
            'date.empty': 'Date cannot be empty.',
            'any.required': 'The Date value is required.',
        }),
    photo: Joi.string().required()
        .uri()
        .messages({
            'string.base': 'Photo URL must be a string.',
            'string.empty': 'Photo URL cannot be empty.',
            'string.uri': 'Photo must be a valid URL.',
            'any.required': 'The Photo URL value is required.',
        }),
});

export default Schema;