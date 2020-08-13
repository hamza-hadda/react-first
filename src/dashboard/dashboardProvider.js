import MyContext from '../myContext';
import React, { Fragment } from 'react';


export default class dashboardProvider extends React.Component {
    state = {
        data : {
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
      }

    render() {
        return (
            <MyContext.Provider
                value={{
                    months: this.state.data,
                }}
            >
                {this.props.children}
            </MyContext.Provider>
        );
    }
}