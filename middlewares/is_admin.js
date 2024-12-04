export default async (req, res, next) => {
    if (req.user.role !== 3) {
        return res.status(403).json({
            success: false,
            message: "You don't have permission to access this resource."
        });
    }
    next();
};





