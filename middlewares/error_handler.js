const error_handler = (error, req, res) => {
    return res.status(500).json({
        success: false,
        message: `Error 500 - An internal server error occurred on the route '${req.originalUrl}' using the '${req.method}' method. Details: ${error.message || 'Unknown error'}`,
        timestamp: new Date().toISOString(),
        requestUrl: req.originalUrl,
        requestMethod: req.method
    })
}

export default error_handler