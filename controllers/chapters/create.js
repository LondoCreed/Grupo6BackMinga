import Chapter from "../../models/Chapter.js"

let create = async (req, res, next) => {
    try {
        let chapter = req.body
        let all = await Chapter.create(chapter)
        return res.status(201).json({
            response:all
        })
    } catch(error){
        next(error)

    }
}

let createMany = async (req, res, next) => {
    try {
        let chapters = req.body
        // Validar que req.body sea un arreglo
        if (!Array.isArray(chapters)) {
            next(error)
        }
        let all = await Chapter.insertMany(chapters)
        return res.status(201).json({
            response: all
        })
    } catch (error) {
        next(error)
    }
}

export {create,createMany}