const express = require("express");
const multer = require("multer");
const uploadFile = require("./services/storage.service");
const postModel = require("./models/post.model");
const cors = require("cors");

const app = express();

// middleware to convert raw data into json
app.use(cors());
app.use(express.json());

const upload = multer({ storage: multer.memoryStorage() });

app.post("/posts", upload.single("url"), async (req, res) => {
  //   console.log(req.body);

  const result = await uploadFile(req.file.buffer);
  //   console.log(result);

  const post = await postModel.create({
    url: result.url,
    caption: req.body.caption,
  });

  return res.status(201).json({
    message: "Post created successfully",
    post: post,
  });
});

app.get("/posts", async (req, res) => {
  const posts = await postModel.find();
  return res.status(200).json({
    message: "Post fetched Successfully",
    post: posts,
  });
});

module.exports = app;
