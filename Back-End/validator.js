const Joi = require('joi');


const validator = (dataSchema) => (payload) =>
    dataSchema.validate(payload, {
        abortEarly: false
    })


const contentSchema = Joi.object({
    Name : Joi.string().required(),
    ReleaseDate : Joi.string(),
    Type: Joi.string().required(),
    ImageUrl: Joi.string().uri(),
    Description: Joi.string()
})

exports.validateInput = validator(contentSchema);