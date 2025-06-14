import Joi from "joi";
import { birthdayTest } from "./date.test.js";

function isDate(value, helppers) {
    try {
        birthdayTest(value)
        return value
    } catch (error) {
        return helppers.message(error.message)        
    }
}


export default class Validation {
    constructor() { }

    static registerValidation(payload) {
        const registerSchema = Joi.object({
            username: Joi.string().min(3).max(100).alphanum().required(),
            password: Joi.string().min(8).max(32).required(),
            r_password: Joi.string().valid(Joi.ref('password')).required(),
            birth_day: Joi.string().custom(isDate).required()
        })
        return registerSchema.validate(payload, {
            allowUnknown: false,
            abortEarly: false
        })
    }
    static loginValidation(payload) {
        const loginSchema = Joi.object({
            username: Joi.string().min(3).max(100).alphanum().required(),
            password: Joi.string().min(8).max(32).required(),
        })
        return loginSchema.validate(payload, {
            allowUnknown: false,
            abortEarly: false
        })
    }
    static updateValidation(payload) {
        const updateSchema = Joi.object({
            username: Joi.string().min(3).max(100).alphanum(),
            password: Joi.string().min(8).max(32),
            birth_day: Joi.string().isoDate()
        })
        return updateSchema.validate(payload, {
            allowUnknown: false,
            abortEarly: false
        })
    }    
}