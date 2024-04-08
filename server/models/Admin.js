import { model, Schema } from "mongoose";

const adminSchema = new Schema({
    user: String,
    pass: String
})

const Admin = model("Admin", adminSchema);

export default Admin;