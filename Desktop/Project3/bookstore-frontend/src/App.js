// src/App.js
import React from 'react';
import './App.css';
import ProductList from './ProductList';
import ProductForm from './ProductForm';

const App = () => {
  return (
    <div className="App">
      <h1>Bookstore</h1>
      <ProductForm />
      <ProductList />
    </div>
  );
};

export default App;
