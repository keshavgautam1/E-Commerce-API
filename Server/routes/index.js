import express from 'express';
import SearchRouter from './search.routes.js';
import productsRouter from './products.routes.js';
import variantsRouter from './variants.routes.js';

const router = express.Router();

// Define routes
router.use('/products', productsRouter);
router.use('/variants', variantsRouter);
router.use('/search', SearchRouter);
export default router;
