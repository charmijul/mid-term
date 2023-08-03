const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");
const { Schema } = mongoose;

const commentSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
  video: {
    type: ObjectId,
    required: true,
  }
},
{
    timestamps: true
});

module.exports = mongoose.model("Comment", commentSchema);
