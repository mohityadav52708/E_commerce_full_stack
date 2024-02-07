import React, { useState } from 'react';
// import './css/productcart.css'; // Make sure to create a CSS file for styling

const productsData = [
  { id: 1, name: 'Men Shirt', category: 'Men', price: 25, imageUrl: 'https://media.istockphoto.com/id/973481674/photo/stylish-man-posing-on-grey-background.jpg?s=612x612&w=0&k=20&c=zn4YXiU1RX4-DHz8XNSSB3PoEKBxpfeFtRTESWX6OWQ=' },
  { id: 2, name: 'Women Dress', category: 'Women', price: 50, imageUrl: 'https://cdn.pixabay.com/photo/2015/11/26/00/14/woman-1063100_640.jpg' },
  { id: 3, name: 'Children Toy', category: 'Children', price: 15, imageUrl: 'https://media.istockphoto.com/id/1144341526/photo/adorable-little-boy-curly-haired-wearing-fashionable-raised-his-right-hand-forward-isolated.jpg?s=612x612&w=0&k=20&c=w4w8C1Srtd6mbu_lyjhyt-TP-m0CJDce_CqJgeBrRtM=' },
  // Add more products with different categories and image URLs
];

const ProductCart = () => {
  const [products, setProducts] = useState(productsData);
  const [searchTerm, setSearchTerm] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleMinPriceChange = (e) => {
    setMinPrice(e.target.value);
  };

  const handleMaxPriceChange = (e) => {
    setMaxPrice(e.target.value);
  };

  const filteredProducts = products.filter(
    (product) =>
      product.category.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (!minPrice || product.price >= parseFloat(minPrice)) &&
      (!maxPrice || product.price <= parseFloat(maxPrice))
  );

  return (
    <div className="product-cart">
      <h2>Product Cart</h2>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by category..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      <div className="price-filter">
        <input
          type="number"
          placeholder="Min Price"
          value={minPrice}
          onChange={handleMinPriceChange}
        />
        <input
          type="number"
          placeholder="Max Price"
          value={maxPrice}
          onChange={handleMaxPriceChange}
        />
      </div>
      <div className="products">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product">
            <img src={product.imageUrl} alt={product.name} className="product-image" />
            <div>
              <h3>{product.name}</h3>
              <p>Category: {product.category}</p>
              <p>Price: ${product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCart;
