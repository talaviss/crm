import React from 'react';
import PropTypes from 'prop-types';

class SearchWidget extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    console.dir(this.props);
  }

  onSearchTermChange(term) {
    this.props.onSearchTextChange(term);
  }

  handleClick() {
    console.log("youve clicked search");
    this.props.onClickSearch();
  }

  render() {
    return (
      <span className="search">
        <input type="text" value={this.props.searchText} placeholder="Search contacts, accounts, customers ..." onChange={event => this.onSearchTermChange(event.target.value)} />
        <button className="btn btn-primary" title="Perform search" onClick={e => this.handleClick(e)}>Search</button>
      </span>
    );
  }
}

SearchWidget.propTypes = {
  onSearchTextChange: PropTypes.func.isRequired,
  onClickSearch: PropTypes.func.isRequired,
  searchText: PropTypes.string
};

SearchWidget.defaultProps = {
  searchText: ''
};

export default SearchWidget;
