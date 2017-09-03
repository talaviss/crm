import React from 'react';
import SearchWidget from './SearchWidget';
import logo from '../images/amdocs.jpg';


const Header = (props) => (
  <div>
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <span className="amdocs-name">Amdocs CRM</span>
      <SearchWidget searchText={props.searchText.term}
          onSearchTextChange={props.actions.requestSetSearchText}
          onClickSearch={props.actions.requestCustomer}
      />
    </div>

  </div>
);

export default Header;
