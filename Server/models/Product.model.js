// models/Product.js
import mongoose, {Schema} from 'mongoose';

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  variants: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Variant',
    },
  ],
});
 const Product = mongoose.model('Product', productSchema);
export default Product;