import { model, Schema } from "mongoose";

const orderSchema = new Schema({
    url: String,
    title: String,
    content: String,
    price: Number,
    name: String,
    imgurl: String,
    address: String,
    city: String,
    state: String,
    code: String,
    mob: String,
    email: String,
    pass: String,
    payment: String,
    type: String
})

const Order = model("Order", orderSchema);

export default Order;