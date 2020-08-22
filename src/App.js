import React from 'react';
import ProductContextProvider from './contexts/ProductContext';
import ProductList from './products/ProductList';
import WordList from './words/WordList';
import WordContextProvider, { BuzzWordsContext } from './contexts/BuzzWordsContext';
import NavBar from './StaticComponents/NavBar';
import SentimentContextProvider from './contexts/SentimentContext';
import SentimentList from './sentiments/SentimentList';
import './App.css';

function App() {
  return (
    <div className="App" className= "container">
    <div>
    <NavBar></NavBar>
    </div>
    <div>
    <SentimentContextProvider>
      <SentimentList/>
    </SentimentContextProvider>
    </div>
    <h1> The Products </h1>
      <div className="row">
        <div className="col-md">
        <ProductContextProvider>
        <ProductList />
      </ProductContextProvider>
        </div>
      <div className="col-md">
      <WordContextProvider>
      <WordList></WordList>
    </WordContextProvider>
      </div>
      </div>
    </div>
  );
}

export default App;