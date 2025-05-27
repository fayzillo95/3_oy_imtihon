import { AuthorizationError, ExistsError, ForbiddenError, NotFoundError } from "../utils/errors/Vlaidatio.error.js";
import CarsModel from "../utils/models/carsModel.js";
import path from "path"
import fs from "fs";

function getPath(fileName) {
    const filePath = path.join(process.cwd(), "src", "utils", "uploads")
    if(!fs.existsSync(filePath)){
        fs.mkdirSync(filePath)
    }
    return path.join(filePath, fileName)
}

export default class CarsService {

    constructor() {}

    static async getAllItems() {
        const data = await CarsModel.find()
        return data
    }
    static async getById(id) {
        const Cars = await CarsModel.findById(id)
        if(!Cars){
            throw new NotFoundError("Cars")
        }
        return Cars        
    }

    static async createItem(body,file) {
        const Cars = await CarsModel.findOne({name : body.name})

        if(Cars) {
            throw new ExistsError("Cars")
        }

        const fileName = new Date().getTime() + "_" + file.name
        const fullPath = getPath(fileName)

        file.mv(fullPath, (error) => {
            if(error){
                throw new ForbiddenError(error.message)
            }
        })

        body.img = fileName
        body.price = Number(body.price)

        const result = await CarsModel.create(body)
        return result
    }

    static async updateItem(body, id) {
        const Cars = await this.getById(id)
        Cars.name = body.name

        await Cars.save()
        return "Cars updated !"
    }

    static async deleteItem(id) {
        console.log(id)
        await this.getById(id)
        const result = await CarsModel.findByIdAndDelete(id)
        console.log(result)
        return "Cars deleted !"
    }
}