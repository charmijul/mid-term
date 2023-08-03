const express = require("express");
const router = express.Router();

const { addComment, loadComments } = require("../controller/comments.controller")

const {
  loadVideos,
  findVideo,
  addVideo,
  deleteVideo,
} = require("../controller/videos.controller");

router.get("/", async (_, res) => {
  try {
  const allVideos = await loadVideos();
  res.status(200).json(allVideos);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const [video, comments] = await Promise.all([findVideo(req.params.id),loadComments(req.params.id)]);
    if (video.length === 0) {
      return res.status(404).json({ message: "Video tidak ditemukan." });
    }
    const detailProduct = video[0].product_detail;
    res.status(201).json([video, detailProduct, comments]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Terjadi kesalahan saat mencari data." });
  }
});

router.post("/:id/comment",async (req, res) => {
  try {
    const result = await addComment(req.params.id, req.body);
    console.log(result);
    res.status(201).redirect(`/videos/${req.params.id}`);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const result = await addVideo(req.body);
    console.log(result);
    res.status(201).redirect("/videos");
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.delete("/delete/:id",(req, res) => {
  try {
    const deletedVideo = deleteVideo(req.params.id);
    console.log(deletedVideo);
    res.status(201).redirect("/videos");
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
