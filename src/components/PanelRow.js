import React, { Component } from 'react';
import NumberInput from './NumberInput';
import Checkbox from 'material-ui/Checkbox'
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';

class PanelRow extends Component {
  static defaultProps = {
    min: Number.POSITIVE_INFINITY,

    onCheck: () => {},
    onChange: () => {},
    onBlur: () => {},
  };
  static propTypes = {
    name: React.PropTypes.string,
    value: React.PropTypes.number,
    checked: React.PropTypes.bool,
    disabled: React.PropTypes.bool,
    min: React.PropTypes.number,

    onCheck: React.PropTypes.func,
    onChange: React.PropTypes.func,
    onBlur: React.PropTypes.func,
  };

  constructor(props) {
    super(props);
    this.state = {
      checked: props.checked,
      radio: props.detail.length > 0,
      value: props.min,
      name: props.nameSubject,
      disabled: props.id === 0 && true
    };

  };

  checkHandler = (e, isInputChecked) => {
    this.setState({ checked: isInputChecked, value: this.props.min });
    this.state.radio && this.setState({ name: "Англійська" });
    this.state.radio ?
      this.props.onChange("Англійська", this.state.value, isInputChecked, this.state.radio) :
      this.props.onChange(this.state.name, this.state.value, isInputChecked, this.state.radio);
  };

  checkRadioHandler = (e, value) => {
    this.setState({ name: value });
    this.props.onChange(value, this.state.value, this.state.checked, this.state.radio);
  };

  blurHandler = (newValue) => {
    this.setState({ value: newValue });
    this.props.onChange(this.state.name, newValue, this.state.checked, this.state.radio);
  };

  changeHandler = (newValue) => {
    this.setState({ value: newValue });
    this.props.onChange(this.state.name, newValue, this.state.checked, this.state.radio);
  };

  render() {
    const DetailList = this.props.detail.map( (detailItem, index) => {
      return (
        <RadioButton
          key={index}
          label={detailItem}
          value={detailItem}
        />
      )
    });

    return(
      <div>
        <div className="sidebar-panel_checkbox">
          <Checkbox
            label={this.props.nameSubject}
            disabled={this.state.disabled}
            checked={this.state.checked}
            className="sidebar-panel_checkbox_label"
            onCheck={this.checkHandler}
          />
          <NumberInput
            name={this.props.nameSubject}
            min={this.props.min}
            max={200}
            disabled={!this.state.checked}
            onBlur={this.blurHandler}
            onChange={this.changeHandler}
          />
        </div>
        {
          this.state.checked && Object.keys(DetailList).length > 0 &&
          <div className="sidebar-panel_radio">
            <RadioButtonGroup name="shipSpeed" defaultSelected="Англійська" onChange={this.checkRadioHandler}>
              {DetailList}
            </RadioButtonGroup>
          </div>
        }
      </div>
    )
  }
}

export default PanelRow;