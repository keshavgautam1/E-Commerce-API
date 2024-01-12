import Variant from '../models/Variant.model.js';

// Assuming you have a Variant model defined in Variant.model.js

const createVariant = async (req, res) => {
  try {
    const { name, SKU, additionalCost, stockCount } = req.body;

    const newVariant = new Variant({
      name,
      SKU,
      additionalCost,
      stockCount,
    });

    const savedVariant = await newVariant.save();

    res.status(201).json(savedVariant);
  } catch (error) {
    console.error('Error creating variant:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getAllVariants = async (req, res) => {
  try {
    const variants = await Variant.find();
    res.json(variants);
  } catch (error) {
    console.error('Error fetching variants:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getVariantById = async (req, res) => {
  try {
    const variantId = req.params.variantId;
    const variant = await Variant.findById(variantId);

    if (!variant) {
      return res.status(404).json({ error: 'Variant not found' });
    }

    res.json(variant);
  } catch (error) {
    console.error('Error fetching variant by ID:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const updateVariant = async (req, res) => {
  try {
    const variantId = req.params.variantId;
    const updatedVariant = await Variant.findByIdAndUpdate(variantId, req.body, {
      new: true,
    });

    if (!updatedVariant) {
      return res.status(404).json({ error: 'Variant not found' });
    }

    res.json(updatedVariant);
  } catch (error) {
    console.error('Error updating variant:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const deleteVariant = async (req, res) => {
  try {
    const variantId = req.params.variantId;
    const deletedVariant = await Variant.findByIdAndDelete(variantId);

    if (!deletedVariant) {
      return res.status(404).json({ error: 'Variant not found' });
    }

    res.json({ message: 'Variant deleted successfully' });
  } catch (error) {
    console.error('Error deleting variant:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export default {
  createVariant,
  getAllVariants,
  getVariantById,
  updateVariant,
  deleteVariant,
};
