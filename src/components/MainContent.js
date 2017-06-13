import React from 'react';

import Sidebar from './Sidebar';
import Content from './Content';

const MainContent = (props) => {
  return (
    <div className="container-fluid">
      <div className="row">
        <Sidebar {...props} />
        <div className="col-lg-9 col-md-9">
          <Content list={props.list} />
        </div>
      </div>
    </div>
  );
};

export default MainContent;