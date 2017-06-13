import React from 'react';

import { calculate } from './../services';
import Intro from './Intro';
import TableInfo from './TableInfo';

const Content = (props) => {
  const {list} = props;
  const dataList = calculate(list).avaliableCourses();
  if (typeof dataList === 'undefined') return false;

  return (
    <div>
      {
        dataList.length === 0 ? <Intro />
        :
        <TableInfo dataList={dataList} />
      }
    </div>
  );
};

export default Content;
