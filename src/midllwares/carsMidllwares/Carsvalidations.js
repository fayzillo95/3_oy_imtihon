import Validation from "../../utils/validations/CarsValidation.js"
import { ValidationError,CustomError } from "../../utils/errors/Vlaidatio.error.js"


export const createValid = (req, res, next) => {
    try {
        if(!req.body) throw new CustomError("Invalid data epty body")
        if(Object.values(req.body).length === 0) throw new CustomError("Invalid data undefined values !", 400)
        if(!req.files?.img) throw new CustomError("File requred img !",400)
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