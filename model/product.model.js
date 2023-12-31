const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema({
    title: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    link_product: {
      type: String,
      required: true
    },
  });

  module.exports = mongoose.model("Product", productSchema);