import UserService from "../service/user.service.js";

export default class UserController{
    constructor(){}

    static async getAllUser(req,res,next) {
        try {
            req.userData = await UserService.getAllItems()
            req.message = "User read Complieted !"
            console.log(req.userData)
            next()
        } catch (error) {
            next(error)
        }
    }

    static async createUser(req, res, next) {
        try {
            req.userData = await UserService.createItem(req.body)
            req.status = 201
            next()
        } catch (error) {
            next(error)
        }
    }

    static async signUser(req, res, next) {
        try {
            req.userData = await UserService.checkSign(req.body)
            req.status = 201
            next()
        } catch (error) {
            next(error)
        }
    }
    static async updateUser(req, res, next) {
        try {
            req.message = await UserService.updateItem(req.body, req.userData.id)
            req.status = 201
            next()
        } catch (error) {
            next(error)
        }
    }
    static async logoutUser(req, res, next) {
        try {
            req.message = await UserService.deleteItem(req.userData.id)
            next()
        } catch (error) {
            next(error)
        }
    }
}