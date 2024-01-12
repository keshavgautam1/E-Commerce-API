import mongoose, {Schema} from 'mongoose';

const variantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  SKU: {
    type: String,
    required: true,
  },
  additionalCost: {
    type: Number,
    required: true,
  },
  stockCount: {
    type: Number,
    required: true,
  },
});

const Variant = mongoose.model('Variant', variantSchema);

export default Variant;