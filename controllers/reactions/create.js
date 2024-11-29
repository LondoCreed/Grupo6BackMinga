import Reaction from '../../models/Reaction.js'

const createReaction = async (req, res, next) => {
  try {
    let reactionData = req.body
    let newReaction = await Reaction.create(reactionData)
    return res.status(201).json({
      message: "Reaction successfully created",
      response: newReaction
    })
  } catch (error) {
    next(error)
  }
}

export default createReaction