const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
  adresse: {
    type: String,
    require: true,
  },

  postedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  phone :  {
    type : String,
  },

  image: {
    type: [String],
    // require: true,
  },

  region: {
    type: String,
    require: true,
  },
  rooms: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  wifi: {
    type: Boolean,
  },
  state: {
    type: Boolean,
  },
  heater: {
    type: Boolean,
  },
  conditioner: {
    type: Boolean,
  },
});

module.exports = Post = mongoose.model("post", postSchema);
