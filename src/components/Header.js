import React from 'react';
import SearchWidget from './SearchWidget';
import logo from '../images/amdocs.jpg';


const Header = () => (
  <div>
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <span className="amdocs-name">Amdocs CRM</span>
      <SearchWidget />
    </div>

  </div>
);

export default Header;
