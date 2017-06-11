import React from 'react';

import { data, pickOutCourses } from './../services';
import Intro from './Intro';
import TableInfo from './TableInfo';

const CourseList = (props) => {
  const {list} = props;
  let dataList = pickOutCourses(data, list);
  return (
    <div>
      {dataList.length == 0 && <Intro />}
      {dataList.length > 0 && <TableInfo dataList={dataList} />}
    </div>
  );
};

export default CourseList;
