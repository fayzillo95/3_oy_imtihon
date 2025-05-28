import { isValidObjectId } from "mongoose";
import { InValidationError, NotFoundError } from "../../utils/errors/Vlaidatio.error.js";
import branchModel from "../../utils/models/branchModel.js";


export function checkId(id){
    if(!isValidObjectId(id)){
        throw new InValidationError(id)   
    }
    return true
}


export async function checkIdAndExists(id, model, name){
    checkId(id)
    const resurs = await model.findById(id)
    if(!resurs){
        throw new NotFoundError(name)
    }
    return resurs
}

