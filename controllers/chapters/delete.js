import Chapter from "../../models/Chapter.js"

//para borrar el primero en que coincida el titulo
let deleteOne = async (req, res, next) => {
    try {
        let deleteChapter = await Chapter.deleteOne({
            title: req.body.title,
        })
        return res.status(200).json({
            response: deleteChapter})

    } catch(error) {
        next(error)

    }
}

//para borrar todos donde coincida el titulo
let deleteMany = async (req, res, next) => {
    try {
        let deleteChapters = await Chapter.deleteMany({
            title: req.body.title,
        })
        return res.status(200).json({
            response: deleteChapters})

    } catch(error) {
        next(error)

    }
}

//para borrar por ID
let deleteByID = async (req, res, next) => {
    try {
        let deleteChapter = await Chapter.findByIdAndDelete(
            req.params.id)
        return res.status(200).json({
            response: deleteChapter})

    } catch(error) {
        next(error)

    }
}

export {deleteOne, deleteMany, deleteByID}