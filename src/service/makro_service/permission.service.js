import { isValidObjectId } from "mongoose";
import { AuthorizationError, CustomError, ExistsError, ForbiddenError, NotFoundError } from "../../utils/errors/Vlaidatio.error.js";
import permissionModel from "../../utils/models/permissionModel.js";
import { checkIdAndExists } from "../mikro_service/checkId.js";
import usersModel from "../../utils/models/usersModel.js";
import branchModel from "../../utils/models/branchModel.js";

export default class PermissionService {

    constructor() { }

    static async getAllItems() {
        const data = await permissionModel.find()
        return data
    }
    static async getById(id) {
        const permission = await permissionModel.findById(id)
        if (!permission) {
            throw new NotFoundError("permission")
        }
        return permission
    }

    static async createItem(body) {
        await checkIdAndExists(body.user_id, usersModel, "User")
        await checkIdAndExists(body.branch_id, branchModel, "Branch")

        const permission = await permissionModel.findOne({
            user_id: body.user_id,
            branch_id: body.branch_id,
            model: body.model
        })
        if (permission) {
            throw new ExistsError("permission")
        }
        const result = await permissionModel.create(body)
        return result
    }

    static async updateItem(actions, id) {
        const permission = await checkIdAndExists(id, permissionModel,"Permission")
        permission.actions = new Array(...new Set([...permission.actions,actions]))
        await permission.save()
        return "permission updated !"
    }

    static async deleteItem(id) {
        await checkIdAndExists(id, permissionModel,"Permission")
        const result = await permissionModel.findByIdAndDelete(id)
        return "permission deleted !"
    }
}

// PermissionService