import Joi from "joi"

export const createNoteSchema = Joi.object({
  text: Joi.string().min(3).max(30).required(),
  isCompleted: Joi.bool().required(),
  userId: Joi.number().required()
});

