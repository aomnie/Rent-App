const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let userSchema = new Schema({
  name: {
    type: String,
    required: [true, "You must provide a name"],
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  isclient: {
    type: Boolean,
    default: false,
  },
  username: {
    type: String,
    required: [true, "you must provide a username"],
    unique: true,
  },

  password: {
    type: String,
    required: [true, "you must provide a password"],
  },
});

module.exports = User = mongoose.model("user", userSchema);
