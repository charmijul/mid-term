const mongoose = require("mongoose");
const VideoModel = require("../model/video.model");

const loadVideos = () => {
  return VideoModel.find();
};

const findVideo = (inputId) => {
  const id = new mongoose.Types.ObjectId(inputId); // Mengubah string id menjadi ObjectId
  return VideoModel.aggregate([
    {
      $match: { _id: id },
    },
    {
      $lookup: {
        from: "products",
        localField: "product",
        foreignField: "_id",
        as: "product_detail",
      },
    },
  ]);
};

const addVideo = (input) => {
    VideoModel.insertMany(input);
}

const deleteVideo = (id) => {
    VideoModel.deleteOne({ _id: id }).then((result) => {
        return result;
    });
}

module.exports = { loadVideos, findVideo, addVideo, deleteVideo }