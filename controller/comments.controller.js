const mongoose = require("mongoose");
const commentModel = require("../model/comment.model");

const loadComments = (videoID) => {
  return commentModel.find({ video: videoID });
};

const allComments = () => {
  return commentModel.find();
};

const findComment = (id) => {
  return commentModel.findOne({ _id: id });
};

const addComment = (videoID,input) => {
  const { username, comment } = input;
  const videoId = new mongoose.Types.ObjectId(videoID);
  const newComment = { username, comment, video: videoId };
  return commentModel.insertMany(newComment);
};

const deleteComment = (id) => {
  commentModel.deleteOne({ _id: id }).then((result) => {
    return result;
  });
};

module.exports = { loadComments, allComments, findComment, addComment, deleteComment };
