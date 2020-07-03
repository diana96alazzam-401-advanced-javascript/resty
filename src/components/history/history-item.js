import React from 'react';

import './history.scss';



function HistoryItem(props) {
  return (
    <li>Method: {props.method}, URL: {props.url}</li>
  );
}

export default HistoryItem;