import CarsService from "../service/makro_service/cars.service.js";

export default class CarsController{
    constructor(){}

    static async getAllCars(req,res,next) {
        try {
            req.carsData = await CarsService.getAllItems()
            req.message = "Cars read Complieted !"
            next()
        } catch (error) {
            next(error)
        }
    }

    static async createCars(req, res, next) {
        try {
            req.carsData = await CarsService.createItem(req.body, req.files.img)
            req.status = 201
            next()
        } catch (error) {
            next(error)
        }
    }

    static async updateCars(req, res, next) {
        try {
            let {id} = req.params
            req.message = await CarsService.updateItem(req.body ,id)
            req.status = 201
            next()
        } catch (error) {
            next(error)
        }
    }
    static async deleteCars(req, res, next) {
        try {
            let {id} = req.params
            req.message = await CarsService.deleteItem(id)
            next()
        } catch (error) {
            next(error)
        }
    }
}