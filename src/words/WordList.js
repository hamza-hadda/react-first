import React, { useContext } from 'react';
import WordDetails from './WordDetails';
import { BuzzWordsContext } from '../contexts/BuzzWordsContext';

const result = (words) => {
    const labels = [];
    const data = [];
    words.map(
        word =>{
            labels.push(word.word);
            data.push(word.stats);
        }
    )
    let result = {
            labels: labels,
            datasets: [
              {
                label: 'My First dataset',
                backgroundColor: 'rgba(255,99,132,0.2)',
                borderColor: 'rgba(255,99,132,1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                hoverBorderColor: 'rgba(255,99,132,1)',
                data: data
              }
            ]
          };
    return result 
}
const WordList = () => {
  const { words } = useContext(BuzzWordsContext)
  const final_data = result(words)
  return words.length ? (
    <div className="container">
      <div className="row bg-light">
         <WordDetails  className = "col-md" result={final_data} /> );
      </div>
    </div>
  ) : (
    <div className="empty">No Buzz Words here.</div>
  );
}

export default WordList;