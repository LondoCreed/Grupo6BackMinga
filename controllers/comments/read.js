import Comment from "../../models/Comment.js"
import "../../models/Author.js"
import "../../models/Company.js"

let allComments = async (req, res, next) => {
    try {
        let all = await Comment.find()
        return res.status(200).json({
            response: all,
        })
    } catch (error) {
        next(error)
    }
}

let commentsChapter = async (req, res, next) => {
    try {
        let id = req.params.id
        let comments = await Comment.find({ chapterId: id }).populate('authorId', 'name last_name photo updatedAt').populate('companyId', 'name photo updatedAt').exec()
        return res.status(200).json({
            response: comments,
        })
    } catch (error) {
        next(error)
    }
}

export { allComments, commentsChapter }