import Joi from "joi";

export default class Validation {
    constructor() { }

    static createValidation(payload) {
        const createSchema = Joi.object({
            name: Joi.string().required(),
            branch_id : Joi.string().length(24).required(),
            rusm : Joi.string().min(3).required(),
            color : Joi.string().min(3).required(),
            price :Joi.number().required(),
        })
        return createSchema.validate(payload, {
            allowUnknown: false,
            abortEarly: false
        })
    }

    static updateValidation(payload) {
        const updateSchema = Joi.object({
            name: Joi.string(),
            rusm : Joi.string().min(3),
            color : Joi.string().min(3),
            price :Joi.number(),
            img:Joi.string().min(1)
        }).min(1)
        return updateSchema.validate(payload, {
            allowUnknown: false,
            abortEarly: false
        })
    }    
}


    // name : {
    //     type:String
    // },
    // branch_id : {
    //     type :Schema.Types.ObjectId,
    //     ref: "Branch"
    // },
    // rusm : {
    //     type :String
    // },
    // color : {
    //     type :String
    // },
    // price : {
    //     type :Number
    // },
    // img : {
    //     type : String
    // }