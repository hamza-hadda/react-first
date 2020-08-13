import React, { useContext } from 'react';
import { BuzzWordsContext } from '../contexts/BuzzWordsContext';
import {Pie} from 'react-chartjs-2';
import './sentiments.css';



const SentimentDetails = ({ result }) => {
    return (
      <div className= "sentiments">
      <Pie data={result} />
      </div>
    );
  }
  
  export default SentimentDetails;