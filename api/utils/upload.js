import path from "path";
import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    let ext = path.extname(file.originalname);

    cb(null, req.body.name.split(".")[0] + ext);
  },
});

const upload = multer({
  storage: storage,
});

export default upload;
