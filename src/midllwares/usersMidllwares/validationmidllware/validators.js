import { CustomError, ValidationError } from "../../../utils/errors/Vlaidatio.error.js"
import Validation from "../../../utils/validations/user.validations.js"

export const registerValid = (req, res, next) => {
    try {
        if(!req.body) throw new CustomError("Invalid data epty body",400)
        if(Object.values(req.body).length === 0) throw new CustomError("Invalid data undefined values !", 400)
        
        const {error} = Validation.registerValidation(req.body)
        if(error) {
            throw new ValidationError(error.details[0].message)
        }
        next()
    } catch (error) {
        next(error)
    }
}

export const loginValid = (req, res, next) => {
    try {
        if(!req.body) throw new CustomError("Invalid data epty body",400)
        if(Object.values(req.body).length === 0) throw new CustomError("Invalid data undefined values !", 400)
        
        const {error} = Validation.loginValidation(req.body)
        if(error) {
            throw new ValidationError(error.details[0].message,400)
        }
        next()
    } catch (error) {
        next(error)
    }
}

export const updateValid = (req, res, next) => {
    try {
        if(!req.body) throw new CustomError("Invalid data epty body")
        if(Object.values(req.body).length === 0) throw new CustomError("Invalid data undefined values !", 400)
        
        const {error} = Validation.updateValidation(req.body)
        if(error) {
            throw new ValidationError(error.details[0].message)
        }
        next()        
    } catch (error) {
        next(error)
    }
}