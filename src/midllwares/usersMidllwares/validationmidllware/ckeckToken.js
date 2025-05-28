import { AuthorizationError, CustomError } from "../../../utils/errors/Vlaidatio.error.js"
import { veryToken } from "../../../utils/token/tokengeneretor.js"

export const checkToken = (req, res, next) => {
    try {
        const auth = req.headers.authorization
        if(!auth){
            throw new CustomError("Token topilmadi !",401)
        }
        if(!auth.startsWith("Bearer ")) throw new AuthorizationError("Invalid type token !")
        const token = auth.split(" ")[1]
        const {id} = veryToken(token)
        req.userData = {id}
        next()
    } catch (error) {
        error.status = error.status || 406
        next(error)
    }
}