import fs from "fs"
import path from "path"

const userlog = path.join(process.cwd(), "src", "utils", "logs", "userlog")
const serverlog = path.join(process.cwd(), "src", "utils", "logs", "serverlog")

export default function readLogger(app, express) {
    app.use("/api/userlog",express.static(userlog))
    app.use("/api/serverlog",express.static(serverlog))
}
