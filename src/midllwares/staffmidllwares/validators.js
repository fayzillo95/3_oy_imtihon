import { ValidationError } from "../../utils/errors/Vlaidatio.error.js";
import Validation from "../../utils/validations/StaffValidation.js";

export const createValid = (req, res, next) => {
    try {
        if(!req.body || Object.values(req.body).length === 0) {
            throw new ValidationError("epty body !")
        }
        const {error} = Validation.createValidation(req.body)
        if(error) {
            throw new ValidationError(error.details[0].message)
        }
        next()
    } catch (error) {
        next(error)
    }
}

export const updateValid = (req, res, next) => {
    try{
        if(!req.body || Object.values(req.body).length === 0) {
            throw new ValidationError("epty body !")
        }
        const {error} = Validation.updateValidation(req.body)
        if(error) {
            throw new ValidationError(error.details[0].message)
        }
        next()
    }catch(error){
        next(error)
    }
}