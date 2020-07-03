import React from 'react';

import './history.scss';
import HistoryItem from './history-item.js';



class History extends React.Component {
  constructor(props) {
    super(props);
    this.state = (props.history)?(props.history):{};
  }

  componentDidMount() {
    let history = JSON.parse(localStorage.getItem('history'));
    this.setState({history});

  }
  render() {
    let obj = (this.state.history)?(this.state.history):{};
    let historyItems = Object.keys(obj).map(key=> obj[key]);
    return (
      <ul>
        { Object.keys(historyItems).map(objKey=>{
          return <HistoryItem key={objKey} method={historyItems[objKey].method} url={historyItems[objKey].url}/>;
        })}
      </ul>
    );
  }

}


export default History;