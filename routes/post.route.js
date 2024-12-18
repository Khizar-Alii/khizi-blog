import express from "express";
const router = express.Router()
import {getPosts,getPost,createPost,deletePost,featurePost} from "../controllers/post.controller.js"

router.get("/", getPosts);
router.get("/:slug", getPost);
router.post("/", createPost);
router.delete("/:id", deletePost);
router.patch("/feature", featurePost);

export default router;