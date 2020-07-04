import React from 'react';

import './history.scss';
import '../reset.scss';
import HistoryItem from './history-item.js';



class History extends React.Component {
  constructor(props) {
    super(props);
    this.state = {history:(props.history)} ? {history:(props.history)} : {};
  }
  static getDerivedStateFromProps(props, state){
    if (props.selected !== state.history) {
      return{history:state.history}; 
    }

  }
  componentDidMount = () => {
    let history = JSON.parse(localStorage.getItem('history'));
    this.setState({ history });
  }

  render() {

    let obj = (this.state.history) ? (this.state.history) : {};
    // create an array of the items in the local storage
    let historyItems = Object.keys(obj).map(key => obj[key]);
    
    return (
      <ul id='historyLog'>
        {Object.keys(historyItems).map(objKey => {
          // check if the body is empty and assign an empty string if so; other than that keep it the same
          let body = (Object.keys(historyItems[objKey].body).length === 0 && obj.constructor === Object) ? '' : (historyItems[objKey].body);
          
          return <HistoryItem
            key={objKey}
            method={historyItems[objKey].method}
            url={historyItems[objKey].url}
            body={body}
            historyRecall={this.props.historyRecall}
          />;
        })}
      </ul>
    );
  }
}


export default History;