const express = require("express");
const app = express();
const cors = require("cors");
const connectDB = require("./config/connectDB");
// const auth = require("./middlewares/auth");
var bodyParser = require("body-parser");
require("dotenv").config();

// connecting the routes
app.use(express.static(__dirname + "./7"));
app.use(express.static("uploads"));
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

app.use(express.json());
app.use(cors({ origin: "http://localhost:3000" }));
app.use("/api/posts", require("./routes/post"));

app.use("/api/users", require("./routes/user"));

const PORT = process.env.PORT || 6000;

//Connect to database

connectDB();

app.listen(PORT, (err) => {
  if (err) throw err;
  console.log(`SERVER IS RUNNING ON PORT ${PORT}`);
});
