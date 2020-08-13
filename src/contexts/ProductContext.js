import React, { createContext, useState } from 'react';

export const ProductContext = createContext();

const ProductContextProvider = (props) => {
  const [products, setBooks] = useState([
    {title: 'name of the wind', value: 3, id: 1},
    {title: 'the final empire', value: 0, id: 2},
    {title: 'the final empire', value: -1, id: 2},

  ]);
  const removeBook = (id) => {
    setBooks(products.filter(product => product.id !== id));
  }

  return (
    <ProductContext.Provider value={{ products, removeBook }}>
      {props.children}
    </ProductContext.Provider>
  );
}
 
export default ProductContextProvider;