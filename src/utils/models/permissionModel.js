import { Schema, model} from "mongoose";

export default model("Permission",new Schema({
    branch_id : {
        type :Schema.Types.ObjectId,
        ref: "Branch"
    },
    user_id : {
        type :Schema.Types.ObjectId,
        ref: "User"
    },
    actions : {
        type :[String]
    },
    model : {
        type :String
    }
}))