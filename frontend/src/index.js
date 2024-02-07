import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals'
import Navbar from './Navbar'
import Category  from './Category';
import Autoscroller from './Autoscroller';
import ProductCart from './ProductCart';

const root = ReactDOM.createRoot(document.getElementById('root'));
const productImages = [
  'https://cdn.pixabay.com/photo/2019/06/15/16/06/online-4275963_1280.jpg',
  'https://cdn.pixabay.com/photo/2016/11/22/19/08/hangers-1850082_1280.jpg',
  'https://cdn.pixabay.com/photo/2016/11/23/14/56/bazaar-1853361_1280.jpg',
  // Add more image URLs as needed
];

const ParentContainer = () => {
  // Function to handle adding items to the cart
  const handleAddToCart = (productId) => {
    // Implement the logic to add the item to the cart
    // For example, you can update the cart count
    console.log(`Product with ID ${productId} added to cart`);
  };

  return (
    <>
      <Navbar/>
      {/* <Category/> */}
      <React.StrictMode>
        <Autoscroller productImages={productImages} />
      </React.StrictMode>
      {/* <Autoscroller /> */}
      {/* Render the ProductCart component and pass the onAddToCart function as a prop */}
      <ProductCart onAddToCart={handleAddToCart} />
    </>
  );
};

root.render(<ParentContainer />);
reportWebVitals();
