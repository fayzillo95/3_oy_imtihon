import swaggerUi from "swagger-ui-express";
import YAML from "yamljs";
import path from "path";
import { fileURLToPath } from "url";

// __dirname o'rniga esm modul uchun quyidagilar kerak:
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// swagger.yaml fayl yo‘lini belgila
const swaggerDocument = YAML.load(path.join(__dirname, "../../../swagger.yaml"));

export function swaggerLog(app, express) {
    // Swagger UI ni '/api-docs' pathga biriktiramiz
    app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
}
