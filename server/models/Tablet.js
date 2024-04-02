import { model, Schema } from "mongoose";

const tabletSchema = new Schema({
    url: String,
    title: String,
    content: String,
    price: Number
})

const Tablet = model("Tablet", tabletSchema);

export default Tablet;