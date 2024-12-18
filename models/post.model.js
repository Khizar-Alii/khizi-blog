import { Schema } from "mongoose";
import mongoose from "mongoose";

const postSchema = new Schema(
  {
    user : {
      type : Schema.Types.ObjectId,
      ref : "User",
      requierd: true,
    },
    img: {
      type: String,
    },
    title: {
      type: String,
      requierd: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
    desc: {
      type: String,
    },
    content: {
      type: String,
      requierd: true,
    },
    isFeatured: {
      type: Boolean,
      default: false,
    },
    visit: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Post", postSchema);
