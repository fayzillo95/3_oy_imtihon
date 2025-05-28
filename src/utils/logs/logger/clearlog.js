import fs from "fs"
import path from "path"

const userlog = path.join(process.cwd(), "src", "utils", "logs", "userlog", "looger.log")
const serverlog = path.join(process.cwd(), "src", "utils", "logs", "serverlog", "looger.log")

export default function clearLogger(app) {
    app.get("/api/clearlog", (req, res, next) => {
        try {
            fs.writeFileSync(userlog, "")
            fs.writeFileSync(serverlog, "")
            res.send("✅ Log fayllar tozalandi")
        } catch (error) {
            res.json({
                message: "❌ Log fayllarni tozalashda xatolik:" + error.message
            })
        }
    })
}
