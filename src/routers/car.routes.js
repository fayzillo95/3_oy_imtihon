import { Router } from "express";
import CarsController from "../controller/car.controller.js";
import { CarsResponseMidllware } from "../midllwares/carsMidllwares/CarsResponseMidllware.js";
import { createValid,updateValid } from "../midllwares/carsMidllwares/Carsvalidations.js";
import { checkToken } from "../midllwares/usersMidllwares/validationmidllware/ckeckToken.js";
import checkPermission from "../midllwares/usersMidllwares/validationmidllware/checkPermission.js";
const cars_router = Router()

cars_router.post("/api/cars/v1/create",checkToken,checkPermission,createValid  ,CarsController.createCars, CarsResponseMidllware)
cars_router.put("/api/cars/v2/update/:id",checkToken,checkPermission,updateValid ,CarsController.updateCars, CarsResponseMidllware)
cars_router.delete("/api/cars/v3/delete/:id",checkToken,checkPermission,  CarsController.deleteCars, CarsResponseMidllware)
cars_router.get("/api/cars/v4/getall", CarsController.getAllCars, CarsResponseMidllware)

export default cars_router