import React, { createContext, useState } from 'react';

export const SentimentContext = createContext();

const SentimentContextProvider = (props) => {
  const [sentiments, setSentiments] = useState([
    {title: 'positive', value: 0.3, id: 1},
    {title: 'negative', value: 0.7, id: 2},
  ]);

  return (
    <SentimentContext.Provider value={{ sentiments, }}>
      {props.children}
    </SentimentContext.Provider>
  );
}
 
export default SentimentContextProvider;