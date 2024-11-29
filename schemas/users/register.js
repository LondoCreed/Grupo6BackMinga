import Joi from 'joi';

const schema = Joi.object({
    email: Joi.string().email().required().messages({
        'string.base': 'Email: must be a string.',
        'string.email': 'Invalid email format.',
        'string.empty': 'Email cannot be empty.',
        'any.required': 'The Email value is required.'
    }),

    password: Joi.string().required().min(8)
        .pattern(/^[a-zA-Z0-9!@#$%^&*(),.?":{}|<>-_]+$/) // Asegura que la contraseña tenga caracteres válidos
        .pattern(/[a-z]/) // Al menos una letra minúscula
        .pattern(/[A-Z]/) // Al menos una letra mayúscula
        .pattern(/[0-9]/) // Al menos un número
        .messages({
            'string.base': 'Password must be a string.',
            'string.empty': 'Password cannot be empty.',
            'string.min': 'Password must be at least 8 characters long.',
            'string.pattern.base': 'Password must contain at least one uppercase letter, one lowercase letter, and one number.',
            'any.required': 'The Password value is required.'
        }),

    photo: Joi.string()
        .uri()
        .required()
        .messages({
            'string.base': 'Photo URL must be a string.',
            'string.empty': 'Photo URL cannot be empty.',
            'string.uri': 'Photo must be a valid URL.',
            'any.required': 'The Photo URL value is required.',
        }),
});

export default schema;