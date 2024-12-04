import Author from '../../models/Author.js'

const registerAuthor = async (req, res, next) => {
    try {
        let author = req.body
        author.active = true

        let create = await Author.create(author)
        return res.status(201).json({
            success: true,
            message: "Author successfully created",
            response: create 
        })
        
    } catch (error) {
        next(error)
    }
}

export default registerAuthor