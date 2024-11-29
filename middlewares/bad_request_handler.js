const bad_request_handler = (error, req, res, next) => {
    if (error.name === 'ValidationError') {
        const errorsMessages = Object.values(error.errors).map(error => error.message)
        return res.status(400).json({
            success: false,
            message: "Error 400 - All fields required",
            errors: errorsMessages,
            timestamp: new Date().toISOString(),
            requestUrl: req.originalUrl,
            requestMethod: req.method
        })
    }
    next(error)
}

export default bad_request_handler