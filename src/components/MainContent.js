import React from 'react';

import Sidebar from './Sidebar';
import CoursesList from './CoursesList';

const MainContent = (props) => {
  const { onChange, list } = props;
  return (
    <div className="container-fluid">
      <div className="row">
        <Sidebar {...props} />
        <div className="col-lg-9 col-md-9">
          <CoursesList list={list} />
        </div>
      </div>
    </div>
  );
};

export default MainContent;