import Reaction from '../../models/Reaction.js'

const createReaction = async (req, res, next) => {
  try {
    let reactionData = req.body
    let searchReaction=await Reaction.exists({manga_id:req.body.manga_id,author_id:req.body.author_id||req.body.company_id})
    console.log(req.body);
    
    if(searchReaction){
      let updateReaction = await Reaction.findOneAndUpdate( 
        {
          manga_id: req.body.manga_id, 
          author_id: req.body.author_id || req.body.company_id, 
        },
        req.body,)
        if (updateReaction) {
          return res.status(200).json({
            success: true,
            message: "Reaction successfully updated",
            response: updateReaction
          });
        }
    }else{
      let newReaction = await Reaction.create(reactionData)
      return res.status(201).json({
        message: "Reaction successfully created",
        response: newReaction
      })
    }
    
    
    
  } catch (error) {
    next(error)
  }
}

export default createReaction