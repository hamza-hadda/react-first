import React, { createContext, useState } from 'react';

export const ProductContext = createContext();

const ProductContextProvider = (props) => {
  const [products, setBooks] = useState([
    {title: 'the first', value: 3, id: 1},
    {title: 'the second', value: 0, id: 2},
    {title: 'the third', value: -1, id: 2},
    {title: 'the fourth', value: 50, id: 2},


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