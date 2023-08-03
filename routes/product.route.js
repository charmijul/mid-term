const express = require("express");
const router = express.Router();

const {
  loadProducts,
  findProduct,
  addProduct,
  deleteProduct,
} = require("../controller/products.controller");

router.get("/", async (req, res) => {
  try {
    const products = await loadProducts();
    res.status(200).json(products);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get("/:id", async (req, res) => {
    try {
        const product = await findProduct(req.params.id);
        if (product === null) {
            return res.status(404).json({ message: "Produk tidak ditemukan." });
        }
        res.status(201).json(product);
    } catch (error) {
        res.status(400).json({ message: "Produk Tidak Ditemukan" });
    }
});

router.post("/", async (req, res) => {
  // const {title, price, link_product} = req.body;
  // const product = new ProductModel({title, price, link_product});
  // try {
  //     const result = await product.save();
  //     console.log(result);
  //     res.status(201).json(result);
  // } catch (error) {
  //     res.status(400).json({message: error.message});
  // }
  try {
    const result = await addProduct(req.body);
    console.log(result);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.delete("/delete/:id", (req, res) => {
    try {
        const deletedProduct = deleteProduct(req.params.id);
        console.log(deletedProduct);
        res.status(200).redirect("/products");
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;
