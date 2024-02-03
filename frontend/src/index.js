import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals'
import Navbar from './Navbar'
import Category  from './Category';
import Autoscroller from './Autoscroller';
const root = ReactDOM.createRoot(document.getElementById('root'));
const productImages = [
  'https://www.hostinger.in/tutorials/wp-content/uploads/sites/2/2020/06/Accessibility-features-on-the-Display_s-website-showing-color-adjustments-like-changing-the-text-colors-or-making-the-site-monochrome..png',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEoNQXlhvLEmwU1Lb2bgOOkjilfhf5Kjx4icFYvhkKrGPLxbY7loGFzuHOaLjzBjET0Jk&usqp=CAU',
  'https://www.hostinger.in/tutorials/wp-content/uploads/sites/2/2020/06/Accessibility-features-on-the-Display_s-website-showing-color-adjustments-like-changing-the-text-colors-or-making-the-site-monochrome..png',
  // Add more image URLs as needed
];

root.render(
  <>
  <Navbar/>
  <Category/>
    {/* <Autoscroller /> */}
    <React.StrictMode>
    <Autoscroller productImages={productImages} />
  </React.StrictMode>
  </>
);

reportWebVitals();
