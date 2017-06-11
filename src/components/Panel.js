import React from 'react';
import PanelRow from './PanelRow';
import AppBar from 'material-ui/AppBar';

import { dataSubjects } from './../services';

const Panel = (props) => {
  const { list, onChange } = props;
  let newList = list;

  const changeHandler = (name, value, checked, radio) => {
    switch (radio) {
      case false:
        if (checked) {
          newList = list.filter( val => {
            return val.name !== name
          }).concat({
            name: name,
            value: value,
            checked: checked,
            ratio: radio
          });
          onChange(newList);
        }
        else {
          newList = list.filter( val => {
            return val.name !== name
          });
          onChange(newList);
        }
        return 1;
      case true:
        if (checked) {
          newList = list.filter( val => {
            return !val.ratio
          }).concat({
            name: name,
            value: value,
            checked: checked,
            ratio: radio
          });
          onChange(newList);
        } else {
          newList = list.filter( val => {
            return !val.ratio
          });
          onChange(newList);
        }
        return 1;
      default:
        return onChange(newList);
    }
  };

  return (
    <div className="App-panel App-panel-zno">
      <AppBar
        title="Сертифікати ЗНО"
        showMenuIconButton={false}
        className="App-panel-bar"
      />
      <div className="App-insert-wrapper">
        {dataSubjects.map( (row, index) => (
            <PanelRow
              key={index}
              id={index}
              detail={row.detail}
              nameSubject={row.nameSubject}
              checked={row.checked}
              min={row.min}
              onChange={changeHandler}
            />
        ))}
      </div>
    </div>
  );
};


export default Panel;