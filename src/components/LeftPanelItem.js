import React from 'react';


const LeftPanelItem = (props) => (
  <div id="createNew">

     <div className="leftPanelItemHeader">
        <span> {props.headerLabel}</span>
        {props.showArrow &&
          <span className="arrowItem"><i className="fa fa-arrow-down" aria-hidden="true"></i></span>
        }
     </div>


  </div>
);

export default LeftPanelItem;
