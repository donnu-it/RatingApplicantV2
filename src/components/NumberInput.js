import React, { Component } from 'react';
import TextField from 'material-ui/TextField';

const getValidDefaultValue = (defaultValue, props) => {
  let validDefaultValue = +defaultValue;

  if (isNaN(validDefaultValue)) {
    validDefaultValue = 0;
  }

  if (validDefaultValue < props.min) {
    validDefaultValue = props.min;
  }

  if (validDefaultValue > props.max) {
    validDefaultValue = props.max;
  }

  return validDefaultValue;
};

const getValidValue = (value, defaultValue, props) => {
  let validValue = +value;
  if (isNaN(validValue)) {
    validValue = defaultValue || '';
  }

  if (validValue < props.min) {
    validValue = defaultValue || props.min;
  }

  if (validValue > props.max) {
    validValue = defaultValue || props.max;
  }
  if (props.floatingLabelText) {
    validValue = '';
  }
  return validValue;
};

class NumberInput extends Component {
  static defaultProps = {
    min: Number.NEGATIVE_INFINITY,
    max: Number.POSITIVE_INFINITY,

    onFocus: () => {},
    onBlur: () => {},
    onChange: () => {}
  };
  static propTypes = {
    id: React.PropTypes.string,
    name: React.PropTypes.string,
    value: React.PropTypes.number,
    defaultValue: React.PropTypes.number,
    disabled: React.PropTypes.bool,
    floatingLabelText: React.PropTypes.string,
    min: React.PropTypes.number,
    max: React.PropTypes.number,

    onFocus: React.PropTypes.func,
    onBlur: React.PropTypes.func,
    onChange: React.PropTypes.func,
  };
  constructor(props) {
    super(props);

    this.state = {
      defaultValue: this.props.defaultValue && getValidDefaultValue(this.props.defaultValue, props),
      value: getValidValue(props.value, this.props.defaultValue, props),
      disabled: this.props.disabled
    };
    this.oldValue = this.state.value;
  }
  blurHandler = (...props) => {
    let isSubj = (this.props.name !== "Середній бал атестату") && (this.props.name !== "Бал за підготовчі курси");
    let newValue = this.state.value;
    let isFixed = false;

    if (newValue < this.props.min) {
      newValue = this.props.min;
      isFixed = true;
      if (this.props.floatingLabelText) {
        newValue = '';
      }
    }
    if (newValue > this.props.max) {
      newValue = this.props.max;
      isFixed = true;
    }

    if (this.oldValue !== newValue || isFixed) {
      !isSubj && newValue > 0 ? this.setState({ value: newValue.toFixed(1) }) : this.setState({ value: newValue });
      isSubj && this.setState({ value: newValue.toFixed(1) });
      this.oldValue = newValue;
    }

    this.props.onBlur(newValue);
  };
  changeHandler = (e) => {
    let newValue = +e.target.value;
    if (!isNaN(newValue)) {
      this.setState({ value: newValue });
    }
    if (newValue <= 0) {
      if (this.props.floatingLabelText) {
        this.setState({ value: '' });
      }
    }
    this.props.onChange(e);
  };
  componentWillReceiveProps(nextProps) {
    nextProps.disabled &&
    this.setState({
      value: this.props.min
    });
  }
  render() {
    return (
      <div className="lgx-number-field">
        <TextField
          className="lgx-text-field"

          id={this.props.id}
          name={this.props.name}
          value={this.state.value}
          disabled={this.props.disabled}
          floatingLabelText={this.props.floatingLabelText}
          hintText={this.props.hintText}
          onChange={this.changeHandler}
          onFocus={this.props.onFocus}
          onBlur={this.blurHandler}
        />
      </div>
    );
  }
}

export default NumberInput;