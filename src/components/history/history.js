import React from 'react';

import './history.scss';
import HistoryItem from './history-item.js';



class History extends React.Component {
  constructor(props) {
    super(props);
    this.state = { results: [] };
  }

  componentDidMount() {
    let history = localStorage.getItem('rememberMe') ==='true';
    console.log('historyyyyyy', history);
    this.setState({results: history});

  }
  render() {
    return (
      <ul>
        {/* {this.state.results.map((data) => {
          console.log(data);
          return <HistoryItem />;
        })} */}
      </ul>
    );
  }

}


export default History;