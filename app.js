//untuk baca file env
require("dotenv").config();

//set up express.js
const express = require("express");
const app = express();
const PORT = 3000;
app.use(express.json()); //buat parse body json di request htpp
const productRoutes = require("./routes/product.route");
const videoRoutes = require("./routes/video.route");
const commentRoutes = require("./routes/comment.route");
const { loadVideos } = require("./controller/videos.controller")

//set up mongodb + mongoose
const mongoose = require("mongoose");
const DB_URL = process.env.DATABASE_URL; //jika sudah ada module dotenv
// const DB_URL = "mongodb://127.0.0.1:27017/test";
mongoose.connect(DB_URL);
const db = mongoose.connection;

db.on('error',(err) => {
    console.log(err);
});

db.once('connected', () => {
    console.log("DB CONNECTED");
});

app.get("/", async (_, res) => {
    try {
    const allVideos = await loadVideos();
    res.status(200).json(allVideos);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });

app.use("/products", productRoutes);

app.use("/videos", videoRoutes);

app.use("/comments", commentRoutes);

app.use("/", (_, res) => {
  res.status(404).send("<h1>PAGE NOT FOUND</h1>");
});

app.listen(PORT, () => {
    console.log(`server is running in port: ${PORT}`);
}); 