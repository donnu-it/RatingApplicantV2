import React from 'react';

import AdditionalRaitingData from './AdditionalRaitingData'
import Panel from './Panel';
import Header from './Header';

const Sidebar = (props) => {
  return (
    <div className="col-lg-3 col-md-3">
      <Header />
      <AdditionalRaitingData {...props} />
      <Panel {...props} />
    </div>
  )
};

export default Sidebar;