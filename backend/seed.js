const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bcrypt = require('bcryptjs');
const User = require('./model/user');
const Product = require('./model/product');
const connectDB = require('./config/db');

dotenv.config();

connectDB();

const importData = async () => {
  try {
    await User.deleteMany();
    await Product.deleteMany();

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash('123456', salt);
    
    const adminUser = await User.create({
      name: 'Admin User',
      email: 'ayush@gmail.com',
      password: hashedPassword,
      role: 'admin'
    });

    const products = [
      {
        name: 'Wireless Noise-Cancelling Headphones',
        description: 'Immersive sound experience with advanced active noise cancellation.',
        price: 299.99,
        category: 'Electronics',
        stock: 15,
        imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
        ratings: 4.8,
        numReviews: 24
      },
      {
        name: 'Minimalist Modern Chair',
        description: 'A stylish and comfortable addition to any contemporary living room.',
        price: 150.00,
        category: 'Furniture',
        stock: 30,
        imageUrl: 'https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
        ratings: 4.2,
        numReviews: 12
      },
      {
        name: 'Professional DSLR Camera',
        description: 'Capture stunning moments with high-resolution clarity and speed.',
        price: 1199.99,
        category: 'Electronics',
        stock: 8,
        imageUrl: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
        ratings: 4.9,
        numReviews: 50
      },
      {
        name: 'Classic White Sneakers',
        description: 'Versatile and comfortable, a staple for any casual outfit.',
        price: 85.00,
        category: 'Clothing',
        stock: 50,
        imageUrl: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
        ratings: 4.5,
        numReviews: 89
      },
      {
  name: 'Apple MacBook Air M3',
  description: 'Ultra-thin laptop powered by Apple M3 chip with Retina display and all-day battery life.',
  price: 1299.99,
  category: 'Electronics',
  stock: 15,
  imageUrl: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=800&q=80',
  ratings: 4.9,
  numReviews: 120,
},
{
  name: 'Samsung Galaxy S25 Ultra',
  description: 'Flagship smartphone with AI features, stunning AMOLED display, and advanced camera system.',
  price: 1199.99,
  category: 'Electronics',
  stock: 20,
  imageUrl: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg',
  ratings: 4.8,
  numReviews: 98,
},
{
  name: 'Sony WH-1000XM5 Headphones',
  description: 'Premium wireless noise-cancelling headphones with crystal-clear audio.',
  price: 399.99,
  category: 'Electronics',
  stock: 25,
  imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg',
  ratings: 4.9,
  numReviews: 210,
},
{
  name: 'Apple Watch Series 10',
  description: 'Advanced smartwatch with fitness tracking, ECG, GPS, and always-on display.',
  price: 499.99,
  category: 'Electronics',
  stock: 18,
  imageUrl: 'https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg',
  ratings: 4.8,
  numReviews: 150,
},
{
  name: 'Dell XPS 15 Laptop',
  description: 'Powerful laptop with Intel Core Ultra processor, OLED display, and premium build quality.',
  price: 1699.99,
  category: 'Electronics',
  stock: 12,
  imageUrl: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?crop=entropy&cs=tinysrgb&fit=max&fm=jpg',
  ratings: 4.7,
  numReviews: 85,
},
{
  name: 'Canon EOS R10 Camera',
  description: 'Mirrorless camera offering high-quality photography and 4K video recording.',
  price: 999.99,
  category: 'Electronics',
  stock: 10,
  imageUrl: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg',
  ratings: 4.8,
  numReviews: 67,
},
{
  name: 'JBL Flip 6 Bluetooth Speaker',
  description: 'Portable waterproof Bluetooth speaker with powerful bass and long battery life.',
  price: 149.99,
  category: 'Electronics',
  stock: 30,
  imageUrl: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg',
  ratings: 4.7,
  numReviews: 140,
},
{
  name: 'Logitech MX Master 3S Mouse',
  description: 'Ergonomic wireless productivity mouse with ultra-fast scrolling and silent clicks.',
  price: 99.99,
  category: 'Electronics',
  stock: 35,
  imageUrl: 'https://images.unsplash.com/photo-1527814050087-3793815479db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg',
  ratings: 4.9,
  numReviews: 180,
},
{
  name: 'Samsung 32-inch 4K Smart Monitor',
  description: 'Ultra HD smart monitor with HDR support and built-in streaming apps.',
  price: 449.99,
  category: 'Electronics',
  stock: 14,
  imageUrl: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg',
  ratings: 4.6,
  numReviews: 72,
},
{
  name: 'PlayStation 5 Console',
  description: 'Next-generation gaming console delivering lightning-fast loading and immersive gameplay.',
  price: 549.99,
  category: 'Electronics',
  stock: 16,
  imageUrl: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg',
  ratings: 4.9,
  numReviews: 320,
}
    ];

    await Product.insertMany(products);
    
    console.log('✅ Data Imported Successfully!');
    process.exit();
  } catch (error) {
    console.error(`❌ Error with data import: ${error.message}`);
    process.exit(1);
  }
};

importData();
