import { Schema, model } from "mongoose";

export default model("User", new Schema({
    username : {
        type:String
    },
    password : {
        type :String
    },
    birth_day : {
        type :String
    },
    role : {
        type :  String,
        enum : ['user','staff', 'superadmin', 'admin'],
        default : "user"
    }
}))