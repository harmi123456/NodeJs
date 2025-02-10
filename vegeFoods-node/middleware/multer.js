// const multer = require("multer")

// const Storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, "public/uploads/")
//     },
//     filename: (req, file, cb) => {
//         cb(null, file.filename + "" + Date.now())
//     }
// })

// const upload = multer({storage: Storage}).single("pic")

// module.exports = upload




const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/uploads/"); // Save files inside 'public/uploads'
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + path.extname(file.originalname);
    cb(null, uniqueSuffix); // Generates a proper filename
  },
});

const upload = multer({ storage: storage });

module.exports = upload.single("pic"); // Ensure it's used as a middleware
