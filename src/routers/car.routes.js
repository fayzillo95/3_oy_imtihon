import { Router } from "express";
import CarsController from "../controller/car.controller.js";
import { CarsResponseMidllware } from "../midllwares/carsMidllwares/CarsResponseMidllware.js";
import { createValid,updateValid } from "../midllwares/carsMidllwares/Carsvalidations.js";

const cars_router = Router()

cars_router.post("/v1/create",createValid  ,CarsController.createCars, CarsResponseMidllware)
cars_router.put("/v2/update/:id",updateValid ,CarsController.updateCars, CarsResponseMidllware)
cars_router.delete("/v3/delete/:id",  CarsController.deleteCars, CarsResponseMidllware)
cars_router.get("/v4/getall", CarsController.getAllCars, CarsResponseMidllware)

export default cars_router