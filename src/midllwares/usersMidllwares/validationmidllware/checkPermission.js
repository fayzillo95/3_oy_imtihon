import { checkIdAndExists } from "../../../service/mikro_service/checkId.js"
import { CustomError } from "../../../utils/errors/Vlaidatio.error.js"
import permissionModel from "../../../utils/models/permissionModel.js"
import usersModel from "../../../utils/models/usersModel.js"

export default async function checkPermission(req, res, next) {
    try {
        let { id } = req.userData

        let user = await checkIdAndExists(id, usersModel, "User")
        if(user.role === 'superadmin') return next() 

        let url = req.url.split("/")
        let model = url[url.indexOf("api") + 1]
        let method = req.method
        
        let branch_id;
        if(["POST", "PUT"]){
            branch_id = req.headers['branch_id']
            if(!branch_id) throw new CustomError("branch_id headersdan berilmagan !",400)
        }else{
            branch_id = req.body.branch_id
            if(!branch_id) throw new CustomError("branch_id bodydan berilmagan !",400)
        }

        const permission = await permissionModel.findOne({
            user_id:user._id,
            branch_id,
            model:model,
        })

        if(!permission || !permission?.actions.includes(method)) {
            throw new CustomError(`${user.username} not allowed ${method} in ${model} !`,406)
        }
        
        next()
    } catch (error) {
        next(error)
    }
}

// ['user','staff', 'superadmin', 'admin']