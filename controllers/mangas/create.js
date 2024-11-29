import Manga from "../../models/Manga.js"

let create = async (req, res, next) => {
    try {
        let manga = req.body
        let all = await Manga.create(manga)
        return res.status(201).json({
            response:all
        })

    } catch(error){
        next(error)

    }
}

let createMany = async (req, res, next) => {
    try {
        let mangas = req.body
        // Validar que req.body sea un arreglo
        if (!Array.isArray(mangas)) {
            next(error)
        }
        let all = await Manga.insertMany(mangas)
        return res.status(201).json({
            response: all
        })
    } catch (error) {
        next(error)
    }
}

export {create,createMany}