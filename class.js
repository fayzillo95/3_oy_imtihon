import "dotenv/config"

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
  '683616744bf02ea6454b80da',
  '683616744bf02ea6454b80dc',
  '683616744bf02ea6454b80de',
  '683616744bf02ea6454b80e0',
  '683616744bf02ea6454b80e2',
  '683616744bf02ea6454b80e4',
  '683616744bf02ea6454b80e6',
  '683616744bf02ea6454b80e8',
  '683616744bf02ea6454b80ea',
  '683616744bf02ea6454b80ec',
  '683616744bf02ea6454b80ee',
  '683616744bf02ea6454b80f0',
  '683616744bf02ea6454b80f2'
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