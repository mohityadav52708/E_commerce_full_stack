// CartSection.jsx
import React from 'react';
import category from './css/category.css'

const Category = () => {
  return (
    <section className="cart-section">
      <div className="category-container">
        <div className="category">
          <h2>Men</h2>
          <ul className="sub-categories">
            <li>T-shirts</li>
            <li>Jeans</li>
            <li>Shoes</li>
            {/* Add more sub-categories as needed */}
          </ul>
        </div>

        <div className="category">
          <h2>Women</h2>
          <ul className="sub-categories">
            <li>Dresses</li>
            <li>Handbags</li>
            <li>Accessories</li>
            {/* Add more sub-categories as needed */}
          </ul>
        </div>

        <div className="category">
          <h2>Children</h2>
          <ul className="sub-categories">
            <li>Toys</li>
            <li>Clothing</li>
            <li>Footwear</li>
            {/* Add more sub-categories as needed */}
          </ul>
        </div>

        <div className="category">
          <h2>Grocery</h2>
          <ul className="sub-categories">
            <li>Fruits</li>
            <li>Vegetables</li>
            <li>Cereals</li>
            {/* Add more sub-categories as needed */}
          </ul>
        </div>

        <div className="category">
          <h2>Makeup</h2>
          <ul className="sub-categories">
            <li>Lipstick</li>
            <li>Foundation</li>
            <li>Eyeshadow</li>
            {/* Add more sub-categories as needed */}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Category;
