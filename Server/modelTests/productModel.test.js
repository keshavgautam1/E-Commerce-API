
import mongoose from 'mongoose';
import Product from '../models/product.model.js';

test('should create and save a product successfully', async () => {
  const product = new Product({
    name: 'Test Product',
    description: 'Test Description',
    price: 19.99,
  });
  const savedProduct = await product.save();

  expect(savedProduct._id).toBeDefined();
  expect(savedProduct.name).toBe('Test Product');
  expect(savedProduct.description).toBe('Test Description');
  expect(savedProduct.price).toBe(19.99);
});

