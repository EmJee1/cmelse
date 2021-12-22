import Joi from 'joi'

export const register = Joi.object({
	username: Joi.string().required(),
	email: Joi.string().email().required(),
	password: Joi.string().min(6).required(),
})

export const login = Joi.object({
	identifier: Joi.string().required(),
	password: Joi.string().min(6).required(),
})
