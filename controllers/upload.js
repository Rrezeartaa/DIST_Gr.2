const util = require("util");
const multer = require("multer");
const maxSize = 2 * 1024 * 1024;


let storage = multer.diskStorage({
  
  destination: (req, file, cb) => {
    cb(null, "../DIST_PROJECT_Gr.2/uploads/");
  },
  filename: (req, file, cb) => {
    console.log(file.originalname);
