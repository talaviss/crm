import React from 'react';



class ReactFormLabel extends React.Component {
 constructor() {
  super();
 }

 render() {
  return(
   <label htmlFor={this.props.htmlFor}>{this.props.title}</label>
  )
 }
}


export default ReactFormLabel;
