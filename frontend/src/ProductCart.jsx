import React, { useState, useEffect } from 'react';
import './css/productcart.css';

const productsData = [
  // ... (same as before)
  { id: 1, name: 'Men Shirt', category: 'Men Clothes', price: 25, imageUrl: 'https://media.istockphoto.com/id/973481674/photo/stylish-man-posing-on-grey-background.jpg?s=612x612&w=0&k=20&c=zn4YXiU1RX4-DHz8XNSSB3PoEKBxpfeFtRTESWX6OWQ=' },
  { id: 2, name: 'Women Dress', category: 'Women', price: 50, imageUrl: 'https://cdn.pixabay.com/photo/2015/11/26/00/14/woman-1063100_640.jpg' },
  { id: 3, name: 'Children Toy', category: 'Children', price: 15, imageUrl: 'https://media.istockphoto.com/id/1144341526/photo/adorable-little-boy-curly-haired-wearing-fashionable-raised-his-right-hand-forward-isolated.jpg?s=612x612&w=0&k=20&c=w4w8C1Srtd6mbu_lyjhyt-TP-m0CJDce_CqJgeBrRtM=' },
];

const Category = ({ onCategoryClick }) => {
  const categories = ['All', 'Men Clothes', 'Women', 'Children'];

  return (
    <div className="category-container">
      {categories.map((category, index) => (
        <div className="category" key={index} onClick={() => onCategoryClick(category)}>
          <h2>{category}</h2>
        </div>
      ))}
    </div>
  );
};

const ProductCart = ({ onAddToCart }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [products, setProducts] = useState(productsData);
  const [searchTerm, setSearchTerm] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    // Simulate fetching product data based on selected category
    try {
      // Fetch product data here based on selected category
      // For now, just simulate loading delay
      setTimeout(() => {
        setLoading(false);
        // Update products based on the selected category
        if (selectedCategory && selectedCategory !== 'All') {
          setProducts(productsData.filter(product => product.category.toLowerCase() === selectedCategory.toLowerCase()));
        } else {
          setProducts(productsData);
        }
      }, 1000);
    } catch (error) {
      setError(error);
    }
  }, [selectedCategory]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleMinPriceChange = (e) => {
    setMinPrice(e.target.value);
  };

  const handleMaxPriceChange = (e) => {
    setMaxPrice(e.target.value);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleAddToCart = (productId) => {
    // Implement add to cart functionality here
    // For now, let's just log the product ID
    console.log(`Product with ID ${productId} added to cart`);
    // Call the function passed from the parent component to update the cart count
    onAddToCart(productId);
  };

  const handleBuyNow = (productId) => {
    // Implement buy now functionality here
    console.log(`Product with ID ${productId} bought now`);
  };

  const filteredProducts = products.filter(
    (product) =>
      product.category.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (!minPrice || product.price >= parseFloat(minPrice)) &&
      (!maxPrice || product.price <= parseFloat(maxPrice))
  );

  if (loading) {
    return <div>Loading...</div>; // You can use a loading spinner here
  }

  if (error) {
    return <div>Error: {error.message}</div>; // Display an error message
  }

  return (
    <div className="product-cart">
      <h2>Product Cart</h2>
      <Category onCategoryClick={handleCategoryClick} />
      <div className="products">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product">
            <img src={product.imageUrl} alt={product.name} className="product-image" />
            <div className="Product_information">
              <h3>{product.name}</h3>
              <p id='category'>Category: {product.category}</p>
              <p>Price: ${product.price}</p>
              <button onClick={() => handleAddToCart(product.id)}>Add to Cart</button>
              <button onClick={() => handleBuyNow(product.id)}>Buy Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCart;
