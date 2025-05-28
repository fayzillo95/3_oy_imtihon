// import "dotenv/config"
// import migration from "./src/utils/migration/addressMigration.js"
// migration

import dbCon from "./src/config/Database.js"
import branchModel from "./src/utils/models/branchModel.js"
import { checkIdAndExists } from "./src/service/mikro_service/checkId.js"

const test = async (params) => {
  try {
  dbCon() 
  const res = await checkIdAndExists("68361ba4f609a2b09e7977d4",branchModel,"Branch")
  console.log(res)
} catch (error) {
    console.log(error.message)
}
}
// test()


const addressIds = [
  '6837042aefd947f50831ce2e',
  '6837042aefd947f50831ce30',
  '6837042aefd947f50831ce32',
  '6837042befd947f50831ce34',
  '6837042befd947f50831ce36',
  '6837042befd947f50831ce38',
  '6837042befd947f50831ce3a',
  '6837042befd947f50831ce3c',
  '6837042befd947f50831ce3e',
  '6837042befd947f50831ce40',
  '6837042befd947f50831ce42',
  '6837042befd947f50831ce44',
  '6837042befd947f50831ce46'
]




// import migration from "./src/utils/migration/addressMigration.js"

// async function name(params) {
//     await migration()
//     console.log("Complieated !")
// }
// name()
// import logger from "./src/utils/errors/errorLogger.js";

// try {
//     CanvasRenderi()
// } catch (error) {
//     logger.info("User log", { stack: error.stack });
//     logger.error("Server log", { stack: error.stack });
// }


// // export default class name {
// //     constructor() {}

// //     static async getAllItems() {

// //     }
// //     static async getById(_id) {

// //     }

// //     static async createItem(body) {

// //     }
// //     static async updateItem(body) {

// //     }
// //     static async deleteItem(body) {

// //     }
// // }