import Joi from "joi";

const reactionSchema = Joi.object({
  manga_id: Joi.string().required(),
  author_id: Joi.string().optional().allow(null),
  company_id: Joi.string().optional().allow(null),
  reaction: Joi.string().required()
})

export default reactionSchema
