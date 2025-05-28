import { AuthorizationError, ExistsError, ForbiddenError, NotFoundError } from "../../utils/errors/Vlaidatio.error.js";
import branchModel from "../../utils/models/branchModel.js";

export default class BranchService {

    constructor() {}

    static async getAllItems() {
        const data = await branchModel.find()
        return data
    }
    static async getById(id) {
        const branch = await branchModel.findById(id)
        if(!branch){
            throw new NotFoundError("Branch")
        }
        return branch        
    }

    static async createItem(body) {
        const branch = await branchModel.findOne({name : body.name})
        if(branch) {
            throw new ExistsError("branch")
        }
        const result = await branchModel.create(body)
        return result
    }

    static async updateItem(body, id) {
        const branch = await this.getById(id)
        branch.name = body.name

        await branch.save()
        return "branch updated !"
    }

    static async deleteItem(id) {
        console.log(id)
        await this.getById(id)
        const result = await branchModel.findByIdAndDelete(id)
        console.log(result)
        return "branch deleted !"
    }
}