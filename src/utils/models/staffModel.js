import { Schema, model} from "mongoose";

export default model("Staff",new Schema({
    branch_id : {
        type :Schema.Types.ObjectId,
        ref: "Branch"
    },
    user_id : {
        type :Schema.Types.ObjectId,
        ref: "User"
    },
    salary : {
        type :Number
    }
}))