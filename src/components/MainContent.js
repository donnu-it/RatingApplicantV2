import React from 'react';

import IndicatorsRating from './IndicatorsRating'
import Panel from './Panel'
import CoursesList from './CoursesList'

const MainContent = (props) => {
  const { onChange, list  } = props;
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-3 col-md-3 App-panel-block">
          <IndicatorsRating onChange={onChange} list={list} />
          <Panel onChange={onChange} list={list} />
        </div>
        <div className="col-lg-9 col-md-9">
          <CoursesList list={list} />
        </div>
      </div>
    </div>
  );
};

export default MainContent;