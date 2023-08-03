const express = require("express");
const router = express.Router();

const {
  loadComments,
  findComment,
  addComment,
  deleteComment,
} = require("../controller/comments.controller");

router.get("/", async (req, res) => {
  try {
    const comment = await loadComments();
    res.status(200).json(comment);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get("/:id", async (req, res) => {
    try {
        const comment = await findComment(req.params.id);
        if (comment === null) {
            return res.status(404).json({ message: "Produk tidak ditemukan." });
        }
        res.status(201).json(comment);
    } catch (error) {
        res.status(400).json({ message: "Produk Tidak Ditemukan" });
    }
});

router.post("/", async (req, res) => {
  try {
    const result = await addComment(req.body);
    console.log(result);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.delete("/delete/:id", (req, res) => {
    try {
        const deletedComment = deleteComment(req.params.id);
        console.log(deletedComment);
        res.status(200).redirect("/comments");
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;
