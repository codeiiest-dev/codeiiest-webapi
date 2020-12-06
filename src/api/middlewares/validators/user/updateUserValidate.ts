// Checks if body is valid
import { RequestHandler } from 'express';
import Joi from 'joi';

const schema = Joi.object({
  phone: Joi.string().required().length(10),
  name: Joi.string(),
  links: Joi.object({
    github: Joi.string(),
    linkedin: Joi.string(),
    codeforces: Joi.string(),
    codechef: Joi.string(),
  }),
  status: Joi.string(),
});

const updateUserValidate: RequestHandler = async (req, res, next) => {
  try {
    await schema.validateAsync(req.body);
    next();
  } catch (err) {
    res.status(400);
    res.json({
      message: 'Bad Request',
      status: 400,
      success: false,
    });
  }
};

export default updateUserValidate;
