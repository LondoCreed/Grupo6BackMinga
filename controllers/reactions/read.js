
import Reaction from '../../models/Reaction.js'

let allReactions = async (req, res, next) => {
  try {
    let { reaction, manga_id, author_id, company_id } = req.query
    let query = {}

    if (reaction) {
      query.reaction = { $regex: reaction, $options: 'i' }
    }
    if (manga_id) {
      query.manga_id = manga_id
    }
    if (author_id) {
      query.author_id = author_id
    }
    if (company_id) {
      query.company_id = company_id
    }

    let reactions = await Reaction.find(query)
      .populate('manga_id')
      .populate('author_id')
      .populate('company_id')

    return res.status(200).json({
      response: reactions,
    })
  } catch (error) {
    next(error)
  }
}

let reactionById = async (req, res, next) => {
  try {
    let reactionId = req.params.id;
    let reaction = await Reaction.findById(reactionId)
      .populate('manga_id')
      .populate('author_id')
      .populate('company_id')

    if (!reaction) {
      return res.status(404).json({
        message: "Reaction not found",
      })
    }

    return res.status(200).json({
      response: reaction,
    })
  } catch (error) {
    next(error)
  }
}

export { allReactions, reactionById }