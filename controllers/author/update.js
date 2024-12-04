import { response } from "express";
import Author from "../../models/Author.js"

const updateAuthor = async (req, res, next) => {
    try {
        let author = req.body
        let update = await Author.findByIdAndUpdate(
            author.user_id,
            {
                name: author.name,
                last_name: author.last_name,
                city: author.city,
                country: author.country,
                date: author.date,
                photo: author.photo
            },
            { new: true, }
        )
        return res.status(200).json({
            response: update,
            message: "Author successfully updated"
        })
    } catch (error) {
        next(error)
    }
}

export default updateAuthor

