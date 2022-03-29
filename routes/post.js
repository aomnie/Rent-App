const express = require("express");
const router = express.Router();
// const multer = require("../utils/multer");
const auth = require("../middlewares/auth");
const Post = require("../models/Post");
// const upload = require("../utils/multer");
const User = require("../models/User");
const multer = require("multer");

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./client/public/uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
var upload = multer({ storage: storage });

// add post
// @ post

router.post("/addPost",  auth,upload.array("image"), async (req, res) => {
  try {
    const { adresse, price,image, rooms, wifi, state, heater, conditioner, region } =
      req.body;
    const user = await User.findById(req.user.id);
    // let tabImage = [];

    // req.files.map((file, index) => {
    //   tabImage = [...tabImage, file.filename];
    // });
    const post = await Post.create({
      adresse,
      image,
      price,
      rooms,
      wifi,
      postedBy: user.id,
      phone: user.phone,
      region,
      state,
      heater,
      conditioner,
    });

    res.status(200).json({
      status: true,
      success: true,
      msg: "Post created successfully ",
      data: post,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ status: false, msg: "something is wrong  " });
  }
});
// getting the contact
// @ get

router.get("/postList/post/:id", async (req, res) => {
  try {
    let { id } = req.params;
    const post = await Post.findById(id);
    return res.status(200).json({
      status: true,
      // msg: "created successfully",
      data: post,
    });
  } catch (err) {
    res.status(500).json({ status: false, msg: err });
  }
});

// getting the contact
// @ get

router.get("/postsList", async (req, res) => {
  try {
    const posts = await Post.find({});
    res.status(200).json({
      status: true,
      success: true,
      msg: "Post list ",
      data: posts,
    });
  } catch (err) {
    res.status(500).json({ status: false, msg: err });
  }
});

//getting contact with the same  region
//@ get region

router.get("/postsList/:region", async (req, res) => {
  try {
    let region = req.params.region;
    const post = await Post.find({ region });
    return res.status(200).json({
      status: true,
      msg: "Post with the same region got successfully",
      data: post,
    });
  } catch (err) {
    res.status(500).json({ status: false, msg: err });
  }
});

//remove contact
//delete
router.delete("/deletePost/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Post.findById(id);
    if (!post) {
      res.status(404).json({ status: true, msg: "Post not found !!" });
    }
    // await cloudinary.uploader.destroy(post.cloudinary_id);
    const deletedPost = await Post.findByIdAndDelete({ _id: id });
    res
      .status(200)
      .json({ status: true, msg: "Deleted Successfully", data: deletedPost });
  } catch (err) {
    res.status(500).status({ status: false, msg: err });
  }
});

// put methode
//update
router.put("/updatePost/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const {
      adresse,
      image,
      phone,
      rooms,
      wifi,
      state,
      heater,
      conditioner,
      region,
    } = req.body;
    const post = await Post.findById(id);
    if (!post) {
      res.status(404).json({ status: true, msg: "Post not found !!" });
    }
    const updatedPost = await Post.findByIdAndUpdate(
      { _id: id },
      { ...req.body },
      { new: true }
    );
    res
      .status(200)
      .json({ status: true, msg: "Updated successfully", data: updatedPost });
  } catch (err) {
    res.status(500).status({ status: false, msg: err });
  }
});

module.exports = router;
