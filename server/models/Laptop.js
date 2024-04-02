import { model, Schema } from "mongoose";

const laptopSchema = new Schema({
    url: String,
    title: String,
    content: String,
    price: Number
})

const Laptop = model("Laptop", laptopSchema);

export default Laptop;