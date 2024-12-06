import Joi from "joi-oid";

const schemaComment = Joi.object({
    chapterId: Joi.string()
        .length(24)
        .hex()
        .required()
        .messages({
            'string.base': 'El ID del capítulo debe ser una cadena de texto.',
            'string.empty': 'El ID del capítulo no puede estar vacío.',
            'string.length': 'El ID del capítulo debe tener exactamente 24 caracteres.',
            'string.hex': 'El ID del capítulo debe contener solo caracteres hexadecimales.',
            'any.required': 'El ID del capítulo es obligatorio.',
        }),

    authorId: Joi.string()
        .length(24)
        .hex()
        .optional()
        .messages({
            'string.base': 'El ID del autor debe ser una cadena de texto.',
            'string.empty': 'El ID del autor no puede estar vacío.',
            'string.length': 'El ID del autor debe tener exactamente 24 caracteres.',
            'string.hex': 'El ID del autor debe contener solo caracteres hexadecimales.',
        }),

    companyId: Joi.string()
        .length(24)
        .hex()
        .optional()
        .messages({
            'string.base': 'El ID de la empresa debe ser una cadena de texto.',
            'string.empty': 'El ID de la empresa no puede estar vacío.',
            'string.length': 'El ID de la empresa debe tener exactamente 24 caracteres.',
            'string.hex': 'El ID de la empresa debe contener solo caracteres hexadecimales.',
        }),

    message: Joi.string()
        .min(5)
        .max(500)
        .required()
        .messages({
            'string.min': 'El mensaje debe tener al menos 5 caracteres.',
            'string.max': 'El mensaje no puede tener más de 500 caracteres.',
            'any.required': 'El mensaje es obligatorio.',
        }),
});

export default schemaComment;