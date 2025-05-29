import { CustomError } from "../../utils/errors/Vlaidatio.error.js"
import branchModel from "../../utils/models/branchModel.js"
import staffModel from "../../utils/models/staffModel.js"
import usersModel from "../../utils/models/usersModel.js"
import { checkIdAndExists } from "../mikro_service/checkId.js"

export default class AdminService {
    constructor() { }

    static async CreateRole(body) {
        if(!body) {
            throw new CustomError("Invalid data empty body!", 400)
        }
        if(!body.role) throw new CustomError("role berilmagan!", 400)
        if(!body.user_id) throw new CustomError("user_id berilmagan !", 400)    
        let role = body?.role
        let user_id = body?.user_id
        
        if (!role || !['user', 'staff', 'admin'].includes(role)) {
            throw new CustomError("Invalid role ! ", 400)
        }
        
        const user = await checkIdAndExists(user_id, usersModel, "User")
        const oldrole = user.role

        await usersModel.findByIdAndUpdate(user_id,{role})

        return {
            id: user._id,
            oldrole,
            newRole : role
        }
    }

    static async createStaff(body) {
        if(!body) throw new CustomError("Body berilmagan !",400)
        if(!body.branch_id) throw new CustomError("branch_id bodydan berilmagan!",400)
        if(!body.salary) throw new CustomError("salary bodydan berilmagan!",400)
        if(isNaN(parseInt(body.salary)) || parseInt(body.salary) < 1) throw new CustomError("Invalid salary 1 dan kichik yoki number emas !", 400)

        let { branch_id, user_id, salary } = body 
        const user = await checkIdAndExists(user_id, usersModel, "User")
        const branch = await checkIdAndExists(branch_id, branchModel, "Branch")
        let exists = await staffModel.findOne({branch_id,user_id})
        if(exists){
            throw new CustomError("Bu id dagi staff mavjud",400)
        }
        const newStaff = await staffModel.create(body)

        await user.save()
        return newStaff
    }
    
    static async getAllStaffs(branch_id) {
        const data = await staffModel.find({branch_id}).populate("user_id")
        return data
    }
}