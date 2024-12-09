import Reaction from '../../models/Reaction.js';
import Manga from '../../models/Manga.js';
import Category from '../../models/Category.js';
let allReactions = async (req, res, next) => {
    try { 
        let all = await Reaction.find().populate({
            path: "manga_id",
            populate: {
                path: "category_id"
                
            }
        });
        if (!all.length) {
            return res.status(404).json({ message: "No reactions found" });
        }
        return res.status(200).json({ response: all });
         } catch (error) {

        console.error("Error fetching reactions:", error);
        next(error);
    }
};

let reactionById = async (req, res, next) => {
    try {
  
        let reactionId = req.params.id;
        let reaction = await Reaction.findById(reactionId)
        if (!reaction) {
            return res.status(404).json({ message: "Reaction not found" });
        }
        return res.status(200).json({ response: reaction });
        } catch (error) {
        console.error("Error fetching reaction by ID:", error);
        next(error);
    }
};

export { allReactions, reactionById };
