import Chapter from "../../models/Chapter.js"

//dejamos que se puedan modificar los campos que se quieran y la busqueda se realiza por titulo
let updateOne = async (req, res, next) => {
    try {
        let upd = await Chapter.updateOne(
            { title: req.params.title }, // Condiciones para la búsqueda (titulo)
            req.body,                  // Modificaciones a realizar
            { new: true }              // Retorna el documento modificado
        )
        return res.status(200).json({ response: 'updated', upd })

    } catch (error) {
        next(error)
    }
}

//dejamos que se puedan modificar los campos que se quieran y la busqueda se realiza por titulo
let updateMany = async (req, res, next) => {
    try {
        let upd = await Chapter.updateMany(
            { title: req.params.title }, // Condiciones para la búsqueda
            req.body,                  // Modificaciones a realizar
            { new: true }              // Retorna el documento modificado
        )
        return res.status(200).json({ response: 'updated', upd })

    } catch (error) {
        next(error)
    }
}

//dejamos que se puedan modificar los campos que se quieran y la busqueda se realiza por ID
let updateByID = async (req, res, next) => {
    try {
        let upd = await Chapter.findByIdAndUpdate(
            req.params.id,              // Condiciones para la búsqueda
            req.body,                  // Modificaciones a realizar
            { new: true }              // Retorna el documento modificado
        )
        return res.status(200).json({ response: 'updated', upd })

    } catch (error) {
        next(error)
    }
}



export { updateOne, updateMany, updateByID }