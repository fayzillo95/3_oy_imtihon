import { AuthorizationError, ExistsError, ForbiddenError, NotFoundError } from "../../utils/errors/Vlaidatio.error.js";
import staffModel from "../../utils/models/staffModel.js";
import usersModel from "../../utils/models/usersModel.js";
import bcrypt from "bcrypt"

export default class UserService {

    constructor() {}

    static async getAllItems() {
        const data = await usersModel.find()
        return data
    }
    static async getById(_id) {
        
    }

    static async createItem(body) {
        const user = await usersModel.findOne({username : body.username})
        if(user) {
            throw new ExistsError("User")
        }
        body.password = await bcrypt.hash(body.password, parseInt(process.env.HASH))
        delete body.r_password
        const result = await usersModel.create(body)
        return {
            id : result._id
        }
    }
    static async checkSign(body) {
        const user = await usersModel.findOne({username: body.username})
        if(!user){
            throw new NotFoundError("User")
        }
        
        const dehashedPass = await bcrypt.compare(body.password, user.password)
        if(!dehashedPass) throw new AuthorizationError()
        return {id : user._id}
    }
    static async updateItem(body, id) {
        console.log(id,body)
        const user = await usersModel.findById(id)
        if(!user){
            throw new NotFoundError("User")
        }
        for(let key in body){
            if(key == "password"){
                body.password = await bcrypt.hash(body.password, parseInt(process.env.HASH))
            }
            user[key] = body[key]
        }
        await user.save()
        return "User updated !"
    }
    static async deleteItem(id) {
        const user = await usersModel.findById(id)
        if(!user){
            throw new NotFoundError("User")
        }
        await staffModel.deleteOne({user_id:id})
        const result = await usersModel.findByIdAndDelete(id)
        console.log(result)
        return "User deleted !"
    }
}