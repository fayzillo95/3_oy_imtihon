import { AuthorizationError, ExistsError, ForbiddenError, NotFoundError } from "../utils/errors/Vlaidatio.error.js";
import permissionModel from "../utils/models/permissionModel.js";

export default class PermissionService {

    constructor() {}

    static async getAllItems() {
        const data = await permissionModel.find()
        return data
    }
    static async getById(id) {
        const permission = await permissionModel.findById(id)
        if(!permission){
            throw new NotFoundError("permission")
        }
        return permission        
    }

    static async createItem(body) {
        const permission = await permissionModel.findOne({name : body.name})
        if(permission) {
            throw new ExistsError("permission")
        }
        const result = await permissionModel.create(body)
        return result
    }

    static async updateItem(body, id) {
        const permission = await this.getById(id)
        permission.name = body.name

        await permission.save()
        return "permission updated !"
    }

    static async deleteItem(id) {
        console.log(id)
        await this.getById(id)
        const result = await permissionModel.findByIdAndDelete(id)
        console.log(result)
        return "permission deleted !"
    }
}

// PermissionService