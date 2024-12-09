import Chapter from "../../models/Chapter.js"
import "../../models/Manga.js"

let allChapters = async (req, res, next) => { 
    try {
        let {title, order, manga_id} = req.query
        let query = {}
        if (title){
            query.title = {$regex:title, $options:'i'} 
        }
        if (order && !isNaN(order)) {
            query.order = Number(order)
        } else if (order) {
            return res.status(400).json({ error: "'order' must be a number" })
        }
        if (manga_id) {
            query.manga_id = manga_id
        }
        let all = await Chapter.find(query).populate('manga_id', 'title').exec() 
        return res.status(200).json({
            response: all
        })
    }
    catch (error) {
        next(error)
    }
}

let chapterByID = async (req, res, next) => { 
    try {
        let chapterID = req.params.id
        let chapter = await Chapter.findById(chapterID)   
        if (!chapter) {
            return res.status(404).json({ message: "Chapter not found" }) // Manejar caso en que no se encuentre el capítulo
        }
        return res.status(200).json({
            response: chapter
        })
    }
    catch (error) {
        next(error)
    }
}

export {allChapters, chapterByID}