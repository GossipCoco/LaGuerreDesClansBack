const express = require("express");
const Image = require("../controllers/images");

const router = express.Router();

router
  .get("/", Image.GetAllImages)
  .get("/GetAllImagesTable", Image.GetAllImagesTable)
  .put("/upload/:id", Image.Upload)
  .put("/uploadAvatar/:id", Image.UploadAvatar);

module.exports = router;
