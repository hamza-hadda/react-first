import React, { Fragment } from 'react';
import {Pie, Doughnut} from 'react-chartjs-2';
import 'bootstrap/dist/css/bootstrap.css';
import './dashboard.css';
import MyContext from '../myContext';

const state = {
  labels: ['January', 'February'],
  datasets: [
    {
      label: 'Rainfall',
      backgroundColor: [
        '#B21F00',
        '#C9DE00',
      ],
      data: [65, 59]
    }
  ]
}
const data = {
	labels: [
		'Red',
		'Green',
		'Yellow'
	],
	datasets: [{
		data: [300, 50, 100],
		backgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		],
		hoverBackgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		]
	}]
};

export default class Dashboard extends React.Component {
  render() {
    return (
    <MyContext.Consumer>
      {context => (
              <Fragment>
        <Pie
          data={this.context}
          options={{
            title:{
              display:true,
              text:'Average Rainfall per month',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
              </Fragment>
          )
      }
      </MyContext.Consumer>
    );
  }
}