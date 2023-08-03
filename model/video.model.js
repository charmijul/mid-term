const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");
const { Schema } = mongoose;

const videoSchema = new Schema({
    title: {
      type: String,
      required: true
    },
    url_video: {
      type: String,
      required: true
    },
    product: {
      type: ObjectId,
      required: true
    },
  });

  module.exports = mongoose.model("Video", videoSchema);