import Manga from "../../models/Manga.js"

//para borrar el primero en que coincida el titulo
let deleteOne = async (req, res, next) => {
    try {
        let deleteManga = await Manga.deleteOne({
            title: req.body.title,
        })
        return res.status(200).json({
            response: deleteManga})

    } catch(error) {
        next(error)

    }
}

//para borrar todos donde coincida el titulo
let deleteMany = async (req, res, next) => {
    try {
        let deleteManga = await Manga.deleteMany({
            title: req.body.title,
        })
        return res.status(200).json({
            response: deleteManga})

    } catch(error) {
        next(error)

    }
}

//para borrar por ID
let deleteByID = async (req, res, next) => {
    try {
        let deleteManga = await Manga.findByIdAndDelete(
            req.params.id)
        return res.status(200).json({
            response: deleteManga})

    } catch(error) {
        next(error)

    }
}

export {deleteOne, deleteMany, deleteByID}