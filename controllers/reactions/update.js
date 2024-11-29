import Reaction from '../../models/Reaction.js'

const updateReaction = async (req, res, next) => {
  try {
    const updatedReaction = await Reaction.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (updatedReaction) {
      return res.status(200).json({
        success: true,
        message: "Reaction successfully updated",
        response: updatedReaction
      });
    } else {
      return res.status(404).json({
        success: false,
        message: 'Reaction not found'
      });
    }
  } catch (error) {
    next(error);
  }
};

export default updateReaction