const multer = require("multer");
const path = require("path");

// module.exports = multer({
//   storage: multer.diskStorage({}),
//   fileFilter: (req, file, cd) => {
//     let ext = path.extname(file.originalname);
//     if (ext !== ".jpg" && ext !== ".png" && ext !== ".jpeg") {
//       cd(new Error("File is not supported"), false);
//       return;
//     }
//     cd(null, true);
//   },

//   filename: function (req, file, cb) {
//     cb(null, file.fieldname + "-" + Date.now());
//   },
// });

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "../uploads");
  },
  filename: (req, file, cb) => {
    const name = file.originalname.split(" ").join("_");
  },
});

var upload = multer({
  storage: storage,
  fileFilter: function (req, file, cb) {
    if (
      file.mimetype == "image/png" ||
      file.mimetype == "image/jpg" ||
      file.mimetype == "image/jpeg"
    ) {
      cb(null, true);
    } else {
      cb(null, true);
    }
  },
});

module.exports = upload;
