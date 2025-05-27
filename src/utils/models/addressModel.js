import { Schema, model } from "mongoose";

export default model("Adress", new Schema({
    name : {
        type:String
    }
}))