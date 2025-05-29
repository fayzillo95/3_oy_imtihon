import Joi from "joi";

export default class Validation {
    constructor() { }

    static createValidation(payload) {
        const createSchema = Joi.object({
            branch_id : Joi.string().length(24).required(),
            user_id : Joi.string().length(24).required(),
            salary : Joi.number().required(),
            role:Joi.string().valid("staff","admin")
        })
        return createSchema.validate(payload, {
            allowUnknown: false,
            abortEarly: false
        })
    }

    static updateValidation(payload) {
        const updateSchema = Joi.object({
            branch_id : Joi.string().length(24).required(),
            user_id : Joi.string().length(24).required(),
            salary : Joi.number().required()
        })
        return updateSchema.validate(payload, {
            allowUnknown: false,
            abortEarly: false
        })
    }    
}
