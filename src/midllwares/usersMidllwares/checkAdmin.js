import { checkIdAndExists } from "../../service/mikro_service/checkId.js"
import { AuthorizationError } from "../../utils/errors/Vlaidatio.error.js"
import usersModel from "../../utils/models/usersModel.js"

export const isAdmin = async (req, res, next) =>{
    try {
        const user = await checkIdAndExists(req.userData.id,usersModel, "User")
        if(user.role !== "superadmin"){
            throw new AuthorizationError("User role super admin emas !")
        }
        if(req.url.includes("role") && user.role !== "superadmin"){
            throw new AuthorizationError("Bu user role o'zgartira olmaydi!")
        }
        next()
    } catch (error) {
        next(error)
    }
}