// Checks if body is valid
import { RequestHandler } from 'express';
import Joi from 'joi';

const schema = Joi.object({
  phone: Joi.string().required().length(10),
});

const getUserValidate: RequestHandler = async (req, res, next) => {
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

export default getUserValidate;
