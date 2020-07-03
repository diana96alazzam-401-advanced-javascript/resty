import React from 'react';

import './history.scss';



function HistoryItem(props) {

  let recallHistory = (e)=> {
    e.preventDefault();

    let method = e.target.method.value;
    let url = e.target.url.value;
    let body = e.target.body.value;

    props.recallHistory(method,url,body);
  };

  return (
    <li className='history'>
      <form onSubmit={recallHistory}>
        <input name='method' type='hidden' value={props.method} />
        <input name='url' type='hidden' value={props.url} />
        <input name='body' type='hidden' value={props.body} />

        <button type='submit'>
          <span>Method: {props.method} --- </span>
          <span>URL: {props.url}</span>
        </button>
      </form>
    </li>
  );
}

export default HistoryItem;