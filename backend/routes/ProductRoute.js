import express from "express";
import {
    getProducts,
    getProductById,
    saveProduct,
    updateProduct,
    getIdcategory,
    deleteProduct
} from "../controllers/ProductController.js";

const router = express.Router();

router.get('/idcategory', getIdcategory);
router.get('/product', getProducts);
router.get('/product/:id', getProductById);
router.post('/product', saveProduct);
router.patch('/product/:id', updateProduct);
router.delete('/product/:id', deleteProduct);

export default router;