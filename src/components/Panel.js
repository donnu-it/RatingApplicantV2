import React, { Component} from 'react';
import PanelRow from './PanelRow';
import AppBar from 'material-ui/AppBar';

const tableData = [
  {
    nameSubject: "Українська мова",
    min: 100,
    checked: true,
    disabled: true,
    detail: []
  },
  {
    nameSubject: "Біологія",
    min: 100,
    checked: false,
    disabled: true,
    detail: []
  },
  {
    nameSubject: "Географія",
    min: 100,
    checked: false,
    disabled: true,
    detail: []
  },
  {
    nameSubject: "Фізика",
    min: 100,
    checked: false,
    disabled: true,
    detail: []
  },
  {
    nameSubject: "Хімія",
    min: 100,
    checked: false,
    disabled: true,
    detail: []
  },
  {
    nameSubject: "Математика",
    min: 100,
    checked: false,
    disabled: true,
    detail: []
  },
  {
    nameSubject: "Іноземна мова",
    min: 100,
    checked: false,
    disabled: true,
    detail: ["Англійська","Німецька", "Французька", "Іспанська", "Російська"]
  },
  {
    nameSubject: "Історія України",
    min: 100,
    checked: false,
    disabled: true,
    detail: []
  }
];

class Panel extends Component {

  constructor(props) {
    super(props);
    this.state = {
      subjects: this.props.list
    };
    this.changeHandler = this.changeHandler.bind(this);
  };

  changeHandler(name, value, checked, radio){
    switch (radio) {
      case false:
        if (checked) {
          this.setState({
            subjects: this.props.list.filter( val => {
              return val.name !== name
            }).concat({
              name: name,
              value: value,
              checked: checked,
              ratio: radio
            })
          }, function () {
            this.props.onChange(this.state.subjects);
          })
        }
        else {
          this.setState({
            subjects: this.props.list.filter( val => {
              return val.name !== name
            })
          }, function () {
            this.props.onChange(this.state.subjects);
          })
        }
        return 1;
      case true:
        if (checked) {
          this.setState({
            subjects: this.state.subjects.filter( val => {
              return !val.ratio
            }).concat({
              name: name,
              value: value,
              checked: checked,
              ratio: radio
            })
          }, function () {
            this.props.onChange(this.state.subjects);
          })
        } else {
          this.setState({
            subjects: this.state.subjects.filter( val => {
              return !val.ratio
            })
          }, function () {
            this.props.onChange(this.state.subjects);
          })
        }
        return 1;
      default:
        return this.props.onChange(this.state.subjects);
    }
  }
  render() {
    return(
      <div className="App-panel App-panel-zno">
        <AppBar
          title="Сертифікати ЗНО"
          showMenuIconButton={false}
          className="App-panel-bar"
        />
        <div className="App-insert-wrapper">
          {tableData.map( (row, index) => (
            <PanelRow key={index} id={index} detail={row.detail} nameSubject={row.nameSubject} checked={row.checked}  min={row.min} onChange={this.changeHandler} />
          ))}
        </div>
      </div>
    )
  }
}

export default Panel;