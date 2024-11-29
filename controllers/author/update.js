import Author from "../../models/Author.js"

const updateAuthor = async (req, res, next) => {
    try {
        let update = await Author.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
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

