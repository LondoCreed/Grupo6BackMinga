import Reaction from '../../models/Reaction.js';

const createReaction = async (req, res, next) => {
  try {
    const { manga_id, reaction, author_id, company_id } = req.body;



    const searchReaction = await Reaction.exists({
      manga_id: manga_id,
      $or: [
        { author_id: author_id },
        { company_id: company_id },
      ],
    });
    

    if (searchReaction) {
     
      const updateReaction = await Reaction.findOneAndUpdate(
        {
          manga_id: manga_id,
          $or: [
            { author_id: author_id },
            { company_id: company_id },
          ],
        },
        req.body,
        { new: true }
      );
      console.log(updateReaction);
      
      if (updateReaction) {
        return res.status(200).json({
          success: true,
          message: "Reacción actualizada exitosamente",
          response: updateReaction,
        });
      }
    } else {

      const newReaction = await Reaction.create(req.body);
      return res.status(201).json({
        success: true,
        message: "Reacción creada exitosamente",
        response: newReaction,
      });
    }
  } catch (error) {
    next(error);
  }
};

export default createReaction;
