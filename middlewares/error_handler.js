const error_handler = (error, req, res) => {
    return res.status(500).json({
        success: false,
        message: `Error 500 - Se ha producido un error interno del servidor en la ruta '${req.originalUrl}' utilizando el método '${req.method}'. Detalles: ${error.message || 'Error desconocido'}`,
        timestamp: new Date().toISOString(),
        requestUrl: req.originalUrl,
        requestMethod: req.method
    })
}

export default error_handler