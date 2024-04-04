import { model, Schema } from "mongoose";

const mobileSchema = new Schema({
    url: String,
    title: String,
    content: String,
    price: Number
})

const Mobile = model("Mobile", mobileSchema);

export default Mobile;