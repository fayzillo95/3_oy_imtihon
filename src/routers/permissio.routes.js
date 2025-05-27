import { Router } from "express";
import PermissionController from "../controller/permission.controller.js";
import { PermissionResponseMidllware } from "../midllwares/permissionMidllwares/PermissionResponseMidllware.js";
import { createValid,updateValid } from "../midllwares/permissionMidllwares/Permissionvalidations.js";

const permission_router = Router()

permission_router.post("/v1/create",createValid  ,PermissionController.createPermission, PermissionResponseMidllware)
permission_router.put("/v2/update/:id",updateValid ,PermissionController.updatePermission, PermissionResponseMidllware)
permission_router.delete("/v3/remove/:id",  PermissionController.deletePermission, PermissionResponseMidllware)
permission_router.get("/v4/getall", PermissionController.getAllPermission, PermissionResponseMidllware)

export default permission_router