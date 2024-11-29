const not_found_handler = (req, res, next) => {
    return res.status(404).json({
        success: false,
        message: `Ruta no encontrada - Error 404: El método '${req.method}' para la ruta '${req.originalUrl}' no existe.`,
        timestamp: new Date().toISOString(),
        requestUrl: req.originalUrl,
        requestMethod: req.method
    });
}

export default not_found_handler;
