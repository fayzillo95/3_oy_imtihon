import { Router } from "express";
import BranchController from "../controller/brach.controller.js";
import { BranchResponseMidllware } from "../midllwares/branchMidllwares/BranchResponseMidllware.js";
import { createValid, updateValid } from "../midllwares/branchMidllwares/branchvalidations.js";
import checkPermission from "../midllwares/usersMidllwares/validationmidllware/checkPermission.js";
import { checkToken } from "../midllwares/usersMidllwares/validationmidllware/ckeckToken.js";

const branch_router = Router()

branch_router.post("/api/branchs/v1/open",checkToken,checkPermission,createValid  ,BranchController.createBranch, BranchResponseMidllware)
branch_router.put("/api/branchs/v2/update/:id",checkToken,checkPermission,updateValid ,BranchController.updateBranch, BranchResponseMidllware)
branch_router.delete("/ai/branchs/v3/closed/:id",checkToken,checkPermission,  BranchController.closedBranch, BranchResponseMidllware)
branch_router.get("/api/branchs/v4/getall",checkToken,checkPermission, BranchController.getAllBranch, BranchResponseMidllware)
branch_router.get("/api/branchs/v5/getsingle/infoall/:id", BranchController.getAllInfoByBranchId,BranchResponseMidllware)

export default branch_router