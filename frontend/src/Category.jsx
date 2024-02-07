import React, { useState } from 'react';
import './css/category.css';

const Category = ({ onCategoryClick }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const categories = [
    {
      name: 'Men',
    },
    {
      name: 'Women',
    },
    {
      name: 'Children',
    },
    {
      name: 'Grocery',
    },
    {
      name: 'Makeup',
    },
  ];
  return (
    <section className="cart-section">
      <div className="category-container">
        {categories.map((category, index) => (
          <div className="category" key={index} onClick={() => handleCategoryClick(category.name)}>
            <h2>{category.name}</h2>
            
          </div>
        ))}
      </div>
    </section>
  );
};

export default Category;
