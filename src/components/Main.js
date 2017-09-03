import React from 'react';

import ContactDetail  from './contact/ContactDetails';
class Main extends React.Component {

  render() {

    return (
      <div className="main">

          <ContactDetail customer={this.props.customer} />


      </div>
    );
  }
}


export default Main;
