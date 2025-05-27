import { Router } from "express";
import BranchController from "../controller/brach.controller.js";
import { BranchResponseMidllware } from "../midllwares/branchMidllwares/BranchResponseMidllware.js";
import { createValid, updateValid } from "../midllwares/branchMidllwares/branchvalidations.js";


const branch_router = Router()

branch_router.post("/v1/open",createValid  ,BranchController.createBranch, BranchResponseMidllware)
branch_router.put("/v2/update/:id",updateValid ,BranchController.updateBranch, BranchResponseMidllware)
branch_router.delete("/v3/closed/:id",  BranchController.closedBranch, BranchResponseMidllware)
branch_router.get("/v4/getall", BranchController.getAllBranch, BranchResponseMidllware)

export default branch_router