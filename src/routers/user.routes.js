import { Router } from "express";
import UserController from "../controller/user.controller.js";
import { loginValid, registerValid, updateValid } from "../midllwares/usersMidllwares/validationmidllware/validators.js";
import { jwtMidllware } from "../midllwares/usersMidllwares/responseHandlers/jwtMidllware.js";
import { userResponseMidllware } from "../midllwares/usersMidllwares/responseHandlers/userResponser.js";
import { checkToken } from "../midllwares/usersMidllwares/validationmidllware/ckeckToken.js";

const user_router = Router()

user_router.post("/v1/register", registerValid, UserController.createUser, jwtMidllware)
user_router.post("/v2/login", loginValid, UserController.signUser, jwtMidllware)
user_router.put("/v3/update", checkToken, updateValid, UserController.updateUser, userResponseMidllware)
user_router.delete("/v4/logout", checkToken, UserController.logoutUser, userResponseMidllware)
user_router.get("/v5/getall", UserController.getAllUser, userResponseMidllware)

export default user_router