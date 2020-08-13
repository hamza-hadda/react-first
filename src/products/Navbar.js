import React, { useContext } from 'react';
import { ProductContext } from '../contexts/ProductContext';

const Navbar = () => {
  const { products } = useContext(ProductContext);
  return (
    <div className="navbar">
      <h1>Products</h1>
      <p>Currently you have {products.length} books to get through...</p>
    </div>
  );
}
 
export default Navbar;