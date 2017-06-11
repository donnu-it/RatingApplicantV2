import React from 'react';

import AdditionalRaitingData from './AdditionalRaitingData'
import Panel from './Panel';

const Sidebar = (props) => {
  return (
    <div className="col-lg-3 col-md-3 App-panel-block">
      <AdditionalRaitingData {...props} />
      <Panel {...props} />
    </div>
  )
};

export default Sidebar;