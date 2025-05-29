import addressModel from "../../utils/models/addressModel.js";
import branchModel from "../../utils/models/branchModel.js";
import staffModel from "../../utils/models/staffModel.js";
import usersModel from "../../utils/models/usersModel.js";
import carsModel from "../../utils/models/carsModel.js";
import permissionModel from "../../utils/models/permissionModel.js";

import { AuthorizationError, ExistsError, ForbiddenError, NotFoundError } from "../../utils/errors/Vlaidatio.error.js";
import { checkIdAndExists } from "../mikro_service/checkId.js";

export default class BranchService {

    constructor() {}

    static async getAllItems() {
        const data = await branchModel.find()
        return data
    }
    static async gaetAdreses(){
        return addressModel.find()
    }

    static async getById(id) {
        const branch = await branchModel.findById(id)
        if(!branch){
            throw new NotFoundError("Branch")
        }
        return branch        
    }
    static async getSingleBranchAndAllresurs(branch_id) {
        const branch = await checkIdAndExists(branch_id, branchModel, "Branch")
        const adres = await addressModel.findById(branch.address_id)
        const staffs = await staffModel.find({ branch_id })
            .populate("user_id", {
                role: 'staff',
                username: 1
            })
        const cars = await carsModel.find({branch_id})
        return {
            branch :` ${branch.name} ${adres?.name} filiali `, 
            data : {
                staffs,
                cars
            }
        }
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
        await this.getById(id)
        await staffModel.deleteMany({branch_id:id})
        await carsModel.deleteMany({branch_id:id})
        const result = await branchModel.findByIdAndDelete(id)
        console.log(result)
        return "branch closed adn delted in database !"
    }
}