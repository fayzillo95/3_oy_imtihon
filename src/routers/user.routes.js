import { Router } from "express";
import UserController from "../controller/user.controller.js";
import { loginValid, registerValid, updateValid } from "../midllwares/usersMidllwares/validationmidllware/validators.js";
import { jwtMidllware } from "../midllwares/usersMidllwares/responseHandlers/jwtMidllware.js";
import { userResponseMidllware } from "../midllwares/usersMidllwares/responseHandlers/userResponser.js";
import { checkToken } from "../midllwares/usersMidllwares/validationmidllware/ckeckToken.js";

const user_router = Router()

user_router.post("/api/users/v1/register", registerValid, UserController.createUser, jwtMidllware)
user_router.post("/api/users/v2/login", loginValid, UserController.signUser, jwtMidllware)
user_router.put("/api/users/v3/update", checkToken, updateValid, UserController.updateUser, userResponseMidllware)
user_router.delete("/api/users/v4/delete", checkToken, UserController.logoutUser, userResponseMidllware)
user_router.get("/api/users/v5/getall", UserController.getAllUser, userResponseMidllware)

export default user_router