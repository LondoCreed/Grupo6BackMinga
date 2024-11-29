const not_found_handler = (req, res, next) => {
    return res.status(404).json({
        success: false,
        message: `Route not found - Error 404: Method '${req.method}' for route '${req.originalUrl}' does not exist.`,
        timestamp: new Date().toISOString(),
        requestUrl: req.originalUrl,
        requestMethod: req.method
    });
}

export default not_found_handler;
