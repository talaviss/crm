import React from 'react';
//import PropTypes from 'prop-types';
import Menu, {SubMenu, MenuItem} from 'rc-menu';

class TopNav extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(info) {
    console.log('selected ', info);
  }

  handleClick(info) {
    console.log('click ', info);
  }

  render() {
    return (
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
    );
  }
}



export default TopNav;
