import { Router } from "express";
import PermissionController from "../controller/permission.controller.js";
import { PermissionResponseMidllware } from "../midllwares/permissionMidllwares/PermissionResponseMidllware.js";
import { createValid,updateValid } from "../midllwares/permissionMidllwares/Permissionvalidations.js";
import { checkToken } from "../midllwares/usersMidllwares/validationmidllware/ckeckToken.js";
import checkPermission from "../midllwares/usersMidllwares/validationmidllware/checkPermission.js";

const permission_router = Router()

permission_router.post("/api/permissions/v1/create",checkToken,checkPermission,createValid  ,PermissionController.createPermission, PermissionResponseMidllware)
permission_router.put("/api/permissions/v2/update/:id",checkToken,checkPermission,updateValid ,PermissionController.updatePermission, PermissionResponseMidllware)
permission_router.delete("/api/permissions/v3/remove/:id",checkToken,checkPermission,PermissionController.deletePermission, PermissionResponseMidllware)
permission_router.get("/api/permissions/v4/getall",checkToken,checkPermission, PermissionController.getAllPermission, PermissionResponseMidllware)

export default permission_router