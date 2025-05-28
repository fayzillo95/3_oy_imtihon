import Joi from "joi";

export default class Validation {
    constructor() { }

    static createValidation(payload) {
        const createSchema = Joi.object({
            branch_id : Joi.string().length(24).required(),
            user_id : Joi.string().length(24).required(),
            actions : Joi.string().min(3).valid("POST","PUT","DELETE","GET","PATCH").required(),
            model : Joi.string().min(3).valid("cars","branchs").required(),
        })
        return createSchema.validate(payload, {
            allowUnknown: false,
            abortEarly: false
        })
    }

    static updateValidation(payload) {
        const updateSchema = Joi.object({
            actions : Joi.string().min(3).valid("POST","PUT","DELETE","GET","PATCH").required(),
        })
        return updateSchema.validate(payload, {
            allowUnknown: false,
            abortEarly: false
        })
    }    
}
