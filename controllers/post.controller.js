import Post from "../models/post.model.js";

const getPosts = async (req, res) => {
  const posts = await Post.find({});
  if (!posts) {
    res.status(404).json({
      success: false,
      message: "No Posts Exists",
    });
  }
  res.status(200).json({
    success: true,
    data: posts,
  });
};

const getPost = async (req, res) => {
  const post = await Post.findOne({ slug: req.params.slug });
  if (!post) {
    res.status(404).json({
      success: false,
      message: "Post Doesn't Exist..",
    });
  }
  res.status(200).json({
    success: true,
    data: post,
  });
};

const createPost = async (req, res) => {
  const newPost = new Post(req?.body);
  if (!newPost) {
    res.status(404).json({
      success: false,
      message: "Error while creating post",
    });
  }
  await newPost.save();
  res.status(200).json({
    success: true,
    message: "Post Created Successfully",
    data: newPost,
  });
};

const deletePost = async (req, res) => {
  const deltePost = await Post.findByIdAndDelete(req?.params.id);
  if (!deltePost) {
    res.status(404).json({
      success: false,
      message: "Error while deleting post",
    });
  }
  res.status(200).json({
    success: true,
    message: "Post Deleted Successfully",
    data: deltePost,
  });
};

const featurePost = async (req, res) => {
  const featuredPosts = await Post.find({ isFeatured: true });
  if (!featuredPosts) {
    res.status(404).json({
      success: false,
      message: "Can't find Featured Posts...",
    });
  }
  res.status(200).json({
    success: true,
    data: featuredPosts,
  });
};

export { getPosts, getPost, createPost, deletePost, featurePost };
