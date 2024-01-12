import express from 'express';
import productsController from '../controllers/products.controller.js';

const router = express.Router();

// Define routes for products
router.post('/', productsController.createProduct);
router.get('/:productId', productsController.getProductById);
router.get('/', productsController.getAllProducts);
router.put('/:productId', productsController.updateProduct);
router.delete('/:productId', productsController.deleteProduct);

export default router;