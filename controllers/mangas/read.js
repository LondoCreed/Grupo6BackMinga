import Manga from "../../models/Manga.js"
import "../../models/Category.js"
import "../../models/Author.js"
import "../../models/Company.js"

let all = async (req, res, next) => {
    try {
        let {author_id, company_id, title, description, category_id} = req.query
        let query = {}
        if (title) {
            query.title = {$regex: title, $options: 'i'}
        }
        if (description) {
            query.description = {$regex: description, $options: 'i'}
        }
        if (author_id) {
            query.author_id = author_id
        }
        if (company_id) {
            query.company_id = company_id
        }
        if (category_id) {
            query.category_id = category_id
        }
        let all = await Manga.find(query).populate('author_id', 'name').populate('company_id', 'name').populate('category_id', 'name description').exec()
        return res.status(200).json({
            response: all,
        })

    } catch (error){
        next (error)
    }

}

let mangaByID =  async (req, res, next) => {
    try{
        let mangaID = req.params.id
        let manga = await Manga.findById(mangaID)
        if(!manga){
            return res.status(404).json({message: "Manga doesn't exists"})
        }
        return res.status(200).json({
            response: manga
        })

    } catch (error){
        next(error)
    }
}

export {all, mangaByID}