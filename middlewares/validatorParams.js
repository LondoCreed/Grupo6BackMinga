const validateId = (schema) => (req, res, next) => {
    const { error } = schema.validate(req.params, { abortEarly: false })
    if (error) {
        return res.status(400).json({
            success: false,
            message: error.details.map(detail => detail.message)
        })
    }
    next()
}

export default validateId