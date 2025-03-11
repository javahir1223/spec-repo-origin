const express = require('express');
const { getProducts, getProductById, createProduct, updateProduct, deleteProduct } = require('../controllers/shopProductController');
const { verifyAdmin } = require('../middleware/auth.middleware');

const router = express.Router();

router.get('/get-all', getProducts);
router.get('/get/:id', getProductById);
router.post('/create-product',verifyAdmin, createProduct);
router.put('/update-product/:id',verifyAdmin, updateProduct);
router.delete('/delete-product/:id',verifyAdmin, deleteProduct);

module.exports = router;
