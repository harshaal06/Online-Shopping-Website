import { model, Schema } from "mongoose";

const orderSchema = new Schema({
    url: String,
    title: String,
    price: Number,
    name: String,
    address: String,
    city: String,
    state: String,
    code: String,
    mob: String,
    email: String,
    pass: String,
    total: Number
})

const Order = model("Order", orderSchema);

export default Order;