import React from 'react';
import LeftPanelItem from './LeftPanelItem';
const LeftPanel = () => (
  <div className="leftpanel">
    <LeftPanelItem showArrow="true" headerLabel="Create New ..."/>
    <LeftPanelItem headerLabel="Shortcut"/>
    <LeftPanelItem headerLabel="Recent Items"/>
    <LeftPanelItem headerLabel="Custom Links"/>
    <LeftPanelItem headerLabel="Messages and Alerts"/>

  </div>
);

export default LeftPanel;
