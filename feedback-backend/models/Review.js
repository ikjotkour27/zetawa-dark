import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  company: {
    type: String,
  },
  comment: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

// Model name should be singular and meaningful (e.g., "Review")
const Review = mongoose.model("Review", reviewSchema);
export default Review;
