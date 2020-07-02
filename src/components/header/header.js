import React from 'react';

import './header.scss';


const Header = ()=> {
  return (
    <header>
      <h1>RESTy</h1>
      <nav>
        <ul>
          <li><a href='/'>Home</a></li>
          <li><a href='/history'>History</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;