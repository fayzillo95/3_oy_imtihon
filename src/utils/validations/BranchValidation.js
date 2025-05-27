import Joi from "joi";

export default class Validation {
    constructor() { }

    static createValidation(payload) {
        const createSchema = Joi.object({
            name: Joi.string().required(),
            address_id : Joi.string().length(24).required()
        })
        return createSchema.validate(payload, {
            allowUnknown: false,
            abortEarly: false
        })
    }

    static updateValidation(payload) {
        const updateSchema = Joi.object({
            name: Joi.string().required()
        })
        return updateSchema.validate(payload, {
            allowUnknown: false,
            abortEarly: false
        })
    }    
}