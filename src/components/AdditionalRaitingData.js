import React from 'react';
import NumberInput from './NumberInput';
import Create from 'material-ui/svg-icons/content/create';

import { convertMark } from './../services';

const AdditionalRaitingData = (props) => {
  const { list, onChange } = props;
  let newList = list;

  const onFillOut = (newName, newValue) => {
    newList = list.filter( x => {
      return x.name !== newName
    }).concat({
      name: newName,
      value: newValue
    });
    onChange(newList);
  };

  const blurCertHandler = (newValue) => {
    if (newValue !== '') {
      let convValue = convertMark(newValue);
      onFillOut("Середній бал атестату", convValue);
    }
    else {
      onFillOut("Середній бал атестату", 0);
    }
  };

  const blurCoursesHandler = (newValue) => {
    if (newValue !== '') {
      onFillOut("Бал за підготовчі курси", newValue);
    }
    else {
      onFillOut("Бал за підготовчі курси", 0);
    }
  };

  return (
    <div className="App-panel App-panel-ball">
      <div className="App-bal-row">
        <div className="Icon-name-row">
          <Create />
        </div>
        <div className="Icon-name-row">
          <NumberInput name="Середній бал атестату" onBlur={blurCertHandler} floatingLabelText="Середній бал атестату"  min={1} max={12} hintText="за 12 шкалою"/>
        </div>
      </div>
      <div className="App-bal-row">
        <div className="Icon-name-row">
          <Create />
        </div>
        <div className="Icon-name-row">
          <NumberInput name="Бал за підготовчі курси" onBlur={blurCoursesHandler} floatingLabelText="Бал за підготовчі курси"  min={100} max={200} hintText="за шкалою від 100 до 200" />
        </div>
      </div>
    </div>
  );
};

export default AdditionalRaitingData;
