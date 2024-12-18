import { Schema } from "mongoose";
import mongoose from "mongoose";

const userSchema = new Schema(
  {
    username: {
      type: String,
      requierd: true,
      unique: true,
    },
    email: {
      type: String,
      requierd: true,
      unique: true,
    },
    email: {
      type: String,
    },
    savedPosts: {
      type: [String],
      default: [],
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
