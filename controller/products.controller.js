const mongoose = require("mongoose");
const ProductModel = require("../model/product.model");

const loadProducts = () => {
  return ProductModel.find();
};

const findProduct = (id) => {
    return ProductModel.findOne({ _id: id});
};

const addProduct = (input) => {
    return ProductModel.insertMany(input);
}

const deleteProduct = (id) => {
    ProductModel.deleteOne({ _id: id }).then((result) => {
        return result;
    });
}

module.exports = { loadProducts, findProduct, addProduct, deleteProduct }