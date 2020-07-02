import React from 'react';

import './history.scss';



function HistoryItem(props) {
  return (
    <li>Method: {props.data.method}, URL: {props.data.url}</li>
  );
}

export default HistoryItem;