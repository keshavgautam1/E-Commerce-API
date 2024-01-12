// search.controller.js
import Variant from '../models/Variant.model.js';
import Product from '../models/product.model.js';

const searchProducts = async (req, res) => {
  try {
    const { query } = req.query;

    // Basic case-insensitive search in MongoDB using Mongoose
    const results = await Product.find({
      $or: [
        { name: { $regex: query, $options: 'i' } },
        { description: { $regex: query, $options: 'i' } },
        { 'variants.name': { $regex: query, $options: 'i' } },
      ],
    });

    res.json(results);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const searchVariants = async (req, res) => {
  try {
    const { query } = req.query;

    // Basic case-insensitive search in MongoDB using Mongoose
    const results = await Variant.find({
      name: { $regex: query, $options: 'i' }, // Case-insensitive search
    });

    res.json(results);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export default {
  searchProducts,
  searchVariants,
};
