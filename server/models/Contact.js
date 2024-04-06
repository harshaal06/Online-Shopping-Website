import { model, Schema } from "mongoose";

const contactSchema = new Schema({
    name: String,
    email: String,
    message: String
})

const Contact = model("Contact", contactSchema);

export default Contact;