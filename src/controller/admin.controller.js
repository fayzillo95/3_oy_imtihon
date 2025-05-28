import AdminService from "../service/makro_service/admin.service.js";

export default class AdminController {
    constructor() {}

    static async createRole(req, res, next) {
        try {
            req.adminData = await AdminService.CreateRole(req.body)
            req.status = 201
            res.status(201).json(req.adminData)
        } catch (error) {
            next(error)
        }
    }
    static async createStaff(req, res, next) {
        try {
            req.adminData = await AdminService.createStaff(req.body)
            req.status = 201
            res.status(201).json(req.adminData)
        } catch (error) {
            next(error)
        }
    }
    static async getAllStaffs(req, res, next) {
        try {
            req.adminData = await AdminService.getAllStaffs(req.params.id)
            res.status(200).json(req.adminData)
        } catch (error) {
            next(error)
        }
    }
}