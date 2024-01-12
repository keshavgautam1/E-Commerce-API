import express from 'express';
import variantsController from '../controllers/variants.controller.js';

const router = express.Router();

// Define routes for variants
router.post('/', variantsController.createVariant);
router.get('/', variantsController.getAllVariants);
router.get('/:variantId', variantsController.getVariantById);
router.put('/:variantId', variantsController.updateVariant);
router.delete('/:variantId', variantsController.deleteVariant);

export default router;
