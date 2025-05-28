import { checkIdAndExists } from "../../service/mikro_service/checkId.js"
import { AuthorizationError } from "../../utils/errors/Vlaidatio.error.js"
import usersModel from "../../utils/models/usersModel.js"

export const isAdmin = async (req, res, next) =>{
    try {
        const user = await checkIdAndExists(req.userData.id,usersModel, "User")
        if(user.role !== "superadmin"){
            throw new AuthorizationError("User role super admin emas !")
        }
        next()
    } catch (error) {
        next(error)
    }
}