// search.routes.js
import express from 'express';
const SearchRouter = express.Router();
import searchController from '../controllers/search.controller.js';

// Define routes for search
SearchRouter.get('/products', searchController.searchProducts);
SearchRouter.get('/variants', searchController.searchVariants);

export default SearchRouter;
