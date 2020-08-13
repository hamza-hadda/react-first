import React, { createContext, useState } from 'react';

export const BuzzWordsContext = createContext();

const WordContextProvider = (props) => {
  const [words, setWords] = useState([
    {word: 'Machine Learning', stats: 0.3, id: 1},
    {word: 'Artificial Intelligence', stats: 0.6, id: 2},
    {word: 'Software Engineering', stats: 0.7, id: 3},
    {word: 'Informatique', stats: 0.1, id: 4},

  ]);
  const removeBook = (id) => {
    setWords(words.filter(word => word.id !== id));
  }

  return (
    <BuzzWordsContext.Provider value={{ words, }}>
      {props.children}
    </BuzzWordsContext.Provider>
  );
}
 
export default WordContextProvider;