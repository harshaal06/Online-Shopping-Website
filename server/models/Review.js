import { model, Schema } from "mongoose";

const reviewSchema = new Schema({
    name: String,
    message: String
})

const Review = model("Review", reviewSchema);

export default Review;