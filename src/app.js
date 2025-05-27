import "dotenv/config"
import express from "express";
import user_router from "./routers/user.routes.js";
import { errorMidllvare } from "./midllwares/usersMidllwares/responseHandlers/errorMidllvare.js";
import dbCon from "./config/Database.js";
import branch_router from "./routers/branch.routes.js";
import cars_router from "./routers/car.routes.js";
import fileUpload from "express-fileupload";
import permission_router from "./routers/permissio.routes.js";

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(fileUpload())
app.use("/api/users",user_router)
app.use("/api/branchs",branch_router)
app.use("/api/cars", cars_router)
app.use("/api/permissions",permission_router)
app.use(errorMidllvare)

const initApp = async () => {
    const statusDb = await dbCon()
    const port = process.env.PORT
    const host = process.env.HOST
    if(statusDb){
        console.log(statusDb)
        app.listen(port, console.log(`http://${host}:${port}`))
    }
}

initApp()