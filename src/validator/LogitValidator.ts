import Joi from "joi";

export const loginValidator = Joi.object({
    username: Joi.string().min(4).required().messages({
        'string.min':'Username must be at least 3 chars long!',
        'string.empty':'This field is required!',
    }),
    password: Joi.string().min(6).required().messages({
        'string.min':'Password must be at least 3 chars long!',
        'string.empty':'This field is required!',
    })
});