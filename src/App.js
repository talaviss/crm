import React, { Component } from 'react';
import Menu, {SubMenu, MenuItem} from 'rc-menu';
import LeftPanel from './components/LeftPanel';
import Header from './components/Header';
import Footer from './components/Footer';
//import logo from './logo.svg';

import './App.css';

class App extends Component {
  constructor(props) {
     super(props);
     //this.state = {isToggleOn: true};

     // This binding is necessary to make `this` work in the callback
     this.handleClick = this.handleClick.bind(this);
   }


  handleSelect(info) {
    console.log('selected ', info);
  }

  handleClick(info) {
    console.log('click ', info);
  }


  render() {
    //this.handleSelect(null);
    return (
      <div className="App">

        <Header />

        <div className="menucrm">
          <Menu onSelect={this.handleSelect}
                    defaultActiveFirst
                    onClick={this.handleClick} mode="horizontal">
            <MenuItem>Home</MenuItem>
            <MenuItem>Leads</MenuItem>
            <MenuItem>Accounts</MenuItem>
            <MenuItem >Contacts</MenuItem>
            <SubMenu title="Opportunities">
              <MenuItem>Gaming</MenuItem>
            </SubMenu>
            <MenuItem>Reports</MenuItem>
            <MenuItem>Deshboards</MenuItem>
            <SubMenu title="Products">
              <MenuItem>Mobile phones</MenuItem>
              <MenuItem>Lines</MenuItem>
            </SubMenu>
            <MenuItem>Forecasts</MenuItem>
            <MenuItem>Security</MenuItem>
            <MenuItem>System</MenuItem>
            <MenuItem>Cases</MenuItem>
            <MenuItem>Chatter</MenuItem>
          </Menu>
        </div>

        <LeftPanel />

        <p className="App-intro">

        </p>
        <Footer />

      </div>
    );
  }
}

export default App;
