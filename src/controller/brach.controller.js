import BranchService from "../service/makro_service/branch.service.js";

export default class BranchController{
    constructor(){}

    static async getAllBranch(req,res,next) {
        try {
            req.BranchData = await BranchService.getAllItems()
            req.message = "Branch read Complieted !"
            next()
        } catch (error) {
            next(error)
        }
    }
    static async getAllAddress(req, res, next) {
        try {
            const addresses = await BranchService.gaetAdreses()
            res.json(addresses)
        } catch (error) {
            next(error)
        }
    }
    static async getAllInfoByBranchId(req, res, next){
        try {
            req.BranchData = await BranchService.getSingleBranchAndAllresurs(req.params.id)
            req.status = 200
            req.message = "Brand all info !"
            next()
        } catch (error) {
            next(error)
        }
    }
    static async createBranch(req, res, next) {
        try {
            req.BranchData = await BranchService.createItem(req.body)
            req.status = 201
            next()
        } catch (error) {
            next(error)
        }
    }

    static async updateBranch(req, res, next) {
        try {
            let {id} = req.params
            req.message = await BranchService.updateItem(req.body ,id)
            req.status = 201
            next()
        } catch (error) {
            next(error)
        }
    }
    static async closedBranch(req, res, next) {
        try {
            let {id} = req.params
            req.message = await BranchService.deleteItem(id)
            next()
        } catch (error) {
            next(error)
        }
    }
}