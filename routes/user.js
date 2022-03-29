const User = require("../models/User");
const router = require("express").Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
// @desc register user
// @ /api/users/register
// @ post request

router.post("/register", async (req, res) => {
  try {
    const {
      username,
      email,
      name,
      isClient,
      phone,
      password,
    } = req.body;
    if (!username || !email || !password || !name || !isClient || !phone )  {
      return res.status(400).json({ msg: "All fields are required !!!" });
    }
    //   verification of the user
    const existingUser = await User.findOne({ email: email });
    if (existingUser) {
      return res.status(400).json({ msg: "User already exists !!!" });
    }
    // hashing password and create the user
    const salt = await bcrypt.genSalt(10);
    const hashed_password = await bcrypt.hash(password, salt);
    // creation of user
    const user = await User.create({
      username,
      email,
      name,
      isClient,
      phone,
      password: hashed_password,
    });
   return res
      .status(200)
      .json({ status: true, msg: "User created successfully", data: user });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
});

// @desc login user
// @ /api/users/login
// @ post request

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ msg: "All fields are required !!!" });
    }
    const user = await User.findOne({ email: email });
    // if the user exists
    if (user) {
      const verify_password = await bcrypt.compare(password, user.password);
      if (verify_password) {
        const token = await jwt.sign(
          { id: user._id, email: user.email },
          process.env.SECRET_KEY,
          {
            expiresIn: "1h",
          }
        );
        return res.status(200).json({
          status: true,
          msg: "Logged in successfully",
          token: token,
          data: user._id,
        });
      } else {
       return  res.status(400).json({ msg: "Wrong password" });
      }
    } else {
      return res.status(400).json({ msg: "User not found !!" });
    }
  } catch (err) {
    return res.status(500).json({ msg: err });
  }
});

module.exports = router;
