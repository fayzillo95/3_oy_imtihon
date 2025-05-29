import { Router } from "express";
import checkPermission from "../midllwares/usersMidllwares/validationmidllware/checkPermission.js";
import { checkToken } from "../midllwares/usersMidllwares/validationmidllware/ckeckToken.js";
import { createValid } from "../midllwares/staffmidllwares/validators.js";
import AdminController from "../controller/admin.controller.js";
import { isAdmin } from "../midllwares/usersMidllwares/checkAdmin.js";

const admin_router = Router()

admin_router.post("/api/v1/users/role", checkToken, isAdmin,AdminController.createRole)
admin_router.post("/api/v2/branchs/staff", checkToken, createValid ,isAdmin, AdminController.createStaff)
admin_router.get("/api/v3/branchs/staffs/all/:id",checkToken, isAdmin, AdminController.getAllStaffs)

export default admin_router
