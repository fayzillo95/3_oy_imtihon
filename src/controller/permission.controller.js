import PermissionService from "../service/makro_service/permission.service.js";

export default class PermissionController{
    constructor(){}

    static async getAllPermission(req,res,next) {
        try {
            req.permissionData = await PermissionService.getAllItems()
            req.message = "Permission read Complieted !"
            next()
        } catch (error) {
            next(error)
        }
    }

    static async createPermission(req, res, next) {
        try {
            req.permissionData = await PermissionService.createItem(req.body)
            req.status = 201
            next()
        } catch (error) {
            next(error)
        }
    }

    static async updatePermission(req, res, next) {
        try {
            let {id} = req.params
            req.message = await PermissionService.updateItem(req.body.actions ,id)
            req.status = 201
            next()
        } catch (error) {
            next(error)
        }
    }
    static async deletePermission(req, res, next) {
        try {
            let {id} = req.params
            req.message = await PermissionService.deleteItem(id)
            next()
        } catch (error) {
            next(error)
        }
    }
}