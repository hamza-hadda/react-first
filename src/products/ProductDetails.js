import React, { useContext } from 'react';
import { ProductContext } from '../contexts/ProductContext';
import './products.css';

const colorize = (value) => {
    if(value < 0){
        return "#FF0000"
    }
    else if(value > 0){
        return "#008000"
    }
    return "#FFA500"
}

const ProductDetails = ({ product }) => {
  const { removeBook } = useContext(ProductContext);
  return (
    <div className= "products p-2 border" style={{
        backgroundColor:`${colorize(product.value)}`}}>        
        {product.title}
    </div>
  );
}

export default ProductDetails;