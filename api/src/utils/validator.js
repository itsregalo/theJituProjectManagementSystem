const Joi = require('joi')


module.exports.registrationSchema = Joi.object({
    firstName: Joi.string()
    .min(3)
    .max(30)
    .required()
    .messages({
        'string.base': `firstName should be of type: 'text'`,
        'string.empty': `firstName should not be empty`,
        'string.min': `firstName should have at least 3 characters`,
        'String.max': `firstName should contain at most 30 charcters`,
        'any.required': `firstName is a required name`,
    }),
    
    lastName: Joi.string()
    .min(3)
    .max(30)
    .required()
    .messages({
        'string.base': `lastName should be of type: 'text'`,
        'string.empty': `lastName should not be empty`,
        'string.min': `lastName should contain at least 3 characters`,
        'string.max': `lastName should conatin at most 30 charaters`,
        'any.required': `lastName is a required name`
    }),

    email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net']}})
    .required()
    .messages({
        'string.email': `enter correct email format`,
        'any.required': `email filed is required`
    }),

    password: Joi.string()
    .min(8)
    .required()
    .messages({
        'string.min': `password should contain at least 8 characters`,
        'any.required': `passowrd field is required`
    })
})


module.exports.loginSchema = Joi.object({
    email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net']}})
    .required()
    .messages({
        'string.email': `enter correct email format`,
        'any.required': `email filed is required`
    }),

    password: Joi.string()
    .min(8)
    .required()
    .messages({
        'string.min': `password should contain at least 8 characters`,
        'any.required': `passowrd field is required`
    })
})


module.exports.updateSchema = Joi.object({
    firstName: Joi.string()
    .min(3)
    .max(30)
    .required()
    .messages({
        'string.base': `firstName should be of type: 'text'`,
        'string.empty': `firstName should not be empty`,
        'string.min': `firstName should have at least 3 characters`,
        'String.max': `firstName should contain at most 30 charcters`,
        'any.required': `firstName is a required name`,
    }),
    
    lastName: Joi.string()
    .min(3)
    .max(30)
    .required()
    .messages({
        'string.base': `lastName should be of type: 'text'`,
        'string.empty': `lastName should not be empty`,
        'string.min': `lastName should contain at least 3 characters`,
        'string.max': `lastName should conatin at most 30 charaters`,
        'any.required': `lastName is a required name`
    }),

    email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net']}})
    .required()
    .messages({
        'string.email': `enter correct email format`,
        'any.required': `email filed is required`
    })  
})