import React, { useContext } from 'react';
import { BuzzWordsContext } from '../contexts/BuzzWordsContext';
import {HorizontalBar} from 'react-chartjs-2';



const WordDetails = ({ result }) => {
    return (
      <div>
      <HorizontalBar data={result} />
      </div>
    );
  }
  
  export default WordDetails;