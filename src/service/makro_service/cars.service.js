import { AuthorizationError, CustomError, ExistsError, ForbiddenError, NotFoundError } from "../../utils/errors/Vlaidatio.error.js";
import { checkIdAndExists } from "../mikro_service/checkId.js";
import CarsModel from "../../utils/models/carsModel.js";
import path from "path"
import fs from "fs";
import branchModel from "../../utils/models/branchModel.js";
import carsModel from "../../utils/models/carsModel.js";

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
        const Car = await checkIdAndExists(id, carsModel, "Car")
        return Car        
    }

    static async createItem(body,file) {
        if(file.size > (5 * (1024*1024))) throw new CustomError("File size not allowed gretethen 5 mb !",400)
        
        if(!file.mimetype.includes("im")) throw new CustomError(`Invalid file type ${file.mimetype.split("/")[0]} !`,400)   
        
        await checkIdAndExists(body.branch_id, branchModel, "Branch")
        const Cars = await CarsModel.findOne({name : body.name})
        
        if(Cars) {
            throw new ExistsError(Cars.name)
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
        if(body.price < 0.001) throw new CustomError("Price not allowed lestethen in 0.001 !",400)
        const result = await CarsModel.create(body)
        return result
    }

    static async updateItem(body, id) {
        const Car = await checkIdAndExists(id, carsModel, "Car")
        Car.name = body.name

        await Car.save()
        return "Cars updated !"
    }

    static async deleteItem(id) {
        await checkIdAndExists(id, carsModel, "Car")
        const result = await CarsModel.findByIdAndDelete(id)
        console.log(result)
        return "Cars deleted !"
    }
}