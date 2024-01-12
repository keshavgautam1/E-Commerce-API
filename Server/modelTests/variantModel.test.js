// modelTests/variantModel.test.js
import mongoose from 'mongoose';
import Variant from '../models/Variant.model.js';

test('should create and save a variant successfully', async () => {
  const variant = new Variant({
    name: 'Test Variant',
    SKU: 'TEST123',
    additionalCost: 5.0,
    stockCount: 50,
  });
  const savedVariant = await variant.save();

  expect(savedVariant._id).toBeDefined();
  expect(savedVariant.name).toBe('Test Variant');
  expect(savedVariant.SKU).toBe('TEST123');
  expect(savedVariant.additionalCost).toBe(5.0);
  expect(savedVariant.stockCount).toBe(50);
});

