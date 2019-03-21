const Joi = require("joi");

const registerSchema = {
  email: Joi.string()
    .email({ minDomainAtoms: 2 })
    .max(64)
    .required(),

  password: Joi.string()
    .min(6)
    .max(64)
    .required(),

  f_name: Joi.string()
    .min(2)
    .max(64)
    .required(),

  l_name: Joi.string()
    .min(2)
    .max(64)
    .required()
};

const loginSchema = {
  email: Joi.string()
    .email({ minDomainAtoms: 2 })
    .max(64)
    .required(),

  password: Joi.string()
    .min(6)
    .max(64)
    .required()
};
module.exports = { registerSchema, loginSchema };
