import User from "../../models/User.js";

const update = async (req, res, next) => {
    try {
        let user = req.body
        let update = await User.findByIdAndUpdate(
            user._id,
            user,
            { new: true }
        )
        return res.status(200).json({
            response: update
        })

    } catch (error) {
        next(error)

    }
}
const updateRole = async (req, res, next) => {
try {
const { _id, role } = req.body;

if (!_id || role === undefined) {
    return res.status(400).json({
        message: "El ID de usuario y el rol son obligatorios.",
    });
}

const update = await User.findByIdAndUpdate(
    _id,
    { role }, 
    { new: true } 
);

if (!update) {
    return res.status(404).json({
        message: "Usuario no encontrado.",
    });
}

return res.status(200).json({
    message: "Rol actualizado exitosamente.",
    response: update,
});
} catch (error) {
    next(error)
}
};

export { update, updateRole }