import React, { useContext } from 'react';
import SentimentDetails from './SentimentDetails';
import { SentimentContext } from '../contexts/SentimentContext';
const generate_random_color = () =>{
    var ColorCode = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
    return ColorCode
}

const result = (sentiments) => {
    const labels = [];
    const data = [];
    const bgc = [];
    sentiments.map(
        sentiment =>{
            labels.push(sentiment.value);
            data.push(sentiment.value);
            bgc.push(generate_random_color());
        }
    )
    let result = {
            labels: labels,
            datasets: [{
                data: data,
                backgroundColor: bgc,
            } ]
          };
    return result 
}
const SentimentList = () => {
  const { sentiments } = useContext(SentimentContext)
  const final_data = result(sentiments)
  return sentiments.length ? (
    <div className="container">
      <div className="row bg-light">
         <SentimentDetails  className = "col-md" result={final_data} /> );
      </div>
    </div>
  ) : (
    <div className="empty">No Buzz Words here.</div>
  );
}

export default SentimentList;