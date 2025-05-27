import { Schema, model } from "mongoose";

export default model("Branch", new Schema({
    name : {
        type:String
    },
    address_id : {
        type :Schema.Types.ObjectId,
        ref : "Adress"
    }
}))