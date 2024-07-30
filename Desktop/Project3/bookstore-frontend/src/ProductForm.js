// src/ProductForm.js
import React, { useState } from 'react';
import axios from 'axios';

const ProductForm = () => {
  const [product, setProduct] = useState({
    name: '',
    genre: '',
    description: '',
    price: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission
    console.log('Submitting product:', product); // Debugging log
    try {
      const response = await axios.post('http://localhost:3000/products', product);
      console.log('Product added', response.data);
      setProduct({
        name: '',
        genre: '',
        description: '',
        price: ''
      });
    } catch (error) {
      console.error('There was an error adding the product!', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input type="text" name="name" value={product.name} onChange={handleChange} required />
      </div>
      <div>
        <label>Genre:</label>
        <input type="text" name="genre" value={product.genre} onChange={handleChange} required />
      </div>
      <div>
        <label>Description:</label>
        <textarea name="description" value={product.description} onChange={handleChange} required />
      </div>
      <div>
        <label>Price:</label>
        <input type="number" name="price" value={product.price} onChange={handleChange} required />
      </div>
      <button type="submit">Add Product</button>
    </form>
  );
};

export default ProductForm;