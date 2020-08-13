import React, { useContext } from 'react';
import ProductDetails from './ProductDetails';
import { ProductContext } from '../contexts/ProductContext';
import './products.css';

const ProductList = () => {
  const { products } = useContext(ProductContext);
  return products.length ? (
    <div className="container">
      <div className="row d-flex flex-wrap align-items-stretch bg-light">
        {products.map(product => {
          return ( <ProductDetails product={product} key={product.id} /> );
        })}
      </div>
    </div>
  ) : (
    <div className="empty">No books to read. Hello free time :).</div>
  );
}

export default ProductList;