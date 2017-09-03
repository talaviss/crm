import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { BrowserRouter as Router } from 'react-router-dom';

import LeftPanel from '../components/LeftPanel';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TopNav from '../components/TopNav';
import Main from '../components/Main';
import * as CustomerActions from '../actions/CustomerActions';

import '../App.css';

class App extends Component {

  render() {


    return (

      <Router>

          <div className="App">

            <Header {...this.props} />

            <TopNav />
            <div>
              <LeftPanel />

              <Main customer={this.props.customers} />
            </div>
            <Footer />

          </div>

      </Router>
    );
  }
}

function mapStateToProps(state) {
  console.log("mapStateToProps");
  return {
    customers: state.customers.data,
    searchText: state.searchText
  };
}

function mapDispatchToProps(dispatch) {
  //console.log('mapDispatchToProps');
  var aaa=  {
    actions: bindActionCreators(CustomerActions, dispatch) /*
    modalActions: bindActionCreators(ModalActions, dispatch),
    historyActions: bindActionCreators(HistoryActions, dispatch)*/
  };
  console.dir(aaa);
  return aaa;
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
