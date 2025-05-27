import { Schema, model } from "mongoose";

export default model("Car",new Schema({
    name : {
        type:String
    },
    branch_id : {
        type :Schema.Types.ObjectId,
        ref: "Branch"
    },
    rusm : {
        type :String
    },
    color : {
        type :String
    },
    price : {
        type :Number
    },
    img : {
        type : String
    }
}))