import Reaction from '../../models/Reaction.js'

const deleteReaction = async (req, res, next) => {
  try {
    const reactionId = req.params.id;
    const deletedReaction = await Reaction.findByIdAndDelete(reactionId);

    if (!deletedReaction) {
      return res.status(404).json({
        success: false,
        message: "Reaction not found"
      });
    }

    return res.status(200).json({
      success: true,
      message: "Reaction successfully deleted",
      response: deletedReaction
    });
  } catch (error) {
    next(error);
  }
};

export default deleteReaction