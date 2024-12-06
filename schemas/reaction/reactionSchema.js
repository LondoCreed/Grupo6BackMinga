import Joi from "joi";

const reactionSchema = Joi.object({
  manga_id: Joi.string()
      .pattern(/^[0-9a-fA-F]{24}$/) 
      .required(),
  author_id: Joi.string()
      .pattern(/^[0-9a-fA-F]{24}$/)
      .optional()
      .allow(null),
  company_id: Joi.string()
      .pattern(/^[0-9a-fA-F]{24}$/)
      .optional()
      .allow(null),
  reaction: Joi.string()
      .valid('like', 'love', 'dislike', 'amazing')
      .required()
})

export default reactionSchema

