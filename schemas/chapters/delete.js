import joi from "joi-oid"

const schemaTitle = joi.object({
    title: joi.string().pattern(/^[a-zA-Z0-9\u00C0-\u017F\s]+$/).required()
        .messages({
            'string.base': 'The name must be a text',
            'string.pattern.base': 'The name must contain only letters and spaces, no special characters allowed',
            'any.required': 'The name field is required'
        })

})
const schemaTitleAndMangaID = joi.object({
    title: joi.string().pattern(/^[a-zA-Z0-9\u00C0-\u017F\s]+$/).messages({
            'string.base': 'The name must be a text',
            'string.pattern.base': 'The name must contain only letters and spaces, no special characters allowed',
            'any.required': 'The name field is required'
        }),
    manga_id: joi.objectId().messages({
        'string.objectId': 'The manga ID must be a valid ObjectId',
        'any.invalid': 'Invalid manga ID format',
    }),
    atLeastOne: joi.any().valid(null).when('title', {
        is: joi.exist(),
        then: joi.forbidden(),
        otherwise: joi.any().valid(null).when('manga_id', {
            is: joi.exist(),
            then: joi.forbidden(),
            otherwise: joi.required()
        })
    }).messages({
        'any.required': 'You must provide either an author_id or a company_id.',
        'any.unknown': 'Either author_id or company_id must be provided'
    }),


})
const schemaID = joi.object({
    id: joi.objectId().required().messages({
        'string.pattern.name': 'The ID must be a valid ObjectId from MongoDB',
        'any.required': 'The ID field is required'
    })
})

export { schemaTitle, schemaID, schemaTitleAndMangaID }