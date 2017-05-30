import React, {Component} from 'react';
import NumberInput from './NumberInput';
import Create from 'material-ui/svg-icons/content/create';

import { convertMark } from './../services';

//const AdditionalRaitingData = (props) => {
//  return (
//
//  );
//};

class IndicatorsRating extends Component {
  static defaultProps = {
    onChange: () => {},
    onBlur: () => {},
  };
  static propTypes = {
    valueCert: React.PropTypes.number,
    valueCourses: React.PropTypes.number,

    onChange: React.PropTypes.func,
    onBlur: React.PropTypes.func,
  };

  constructor(props) {
    super(props);

    this.state = {
      indicators: this.props.list
    };
    this.convertBall = this.convertBall.bind(this);
    this.onFillOut = this.onFillOut.bind(this);
  };

  convertBall = (ball_12) => {
    switch (true) {
      case (ball_12 > 0) && (ball_12 <= 2):
        return 100;
      case ball_12 > 2 && ball_12 < 3:
        return 100 + (ball_12 - parseInt(ball_12, 10)) * 10;
      case ball_12 >= 3 && ball_12 < 4:
        return 110 + (ball_12 - parseInt(ball_12, 10)) * 10;
      case ball_12 >= 4 && ball_12 < 5:
        return 120 + (ball_12 - parseInt(ball_12, 10)) * 10;
      case ball_12 >= 5 && ball_12 < 6:
        return 130 + (ball_12 - parseInt(ball_12, 10)) * 10;
      case ball_12 >= 6 && ball_12 < 7:
        return 140 + (ball_12 - parseInt(ball_12, 10)) * 10;
      case ball_12 >= 7 && ball_12 < 8:
        return 150 + (ball_12 - parseInt(ball_12, 10)) * 10;
      case ball_12 >= 8 && ball_12 < 9:
        return 160 + (ball_12 - parseInt(ball_12, 10)) * 10;
      case ball_12 >= 9 && ball_12 < 10:
        return 170 + (ball_12 - parseInt(ball_12, 10)) * 10;
      case ball_12 >= 10 && ball_12 < 11:
        return 180 + (ball_12 - parseInt(ball_12, 10)) * 10;
      case ball_12 >= 11 && ball_12 < 12:
        return 190 + (ball_12 - parseInt(ball_12, 10)) * 10;
      case ball_12 === 12:
        return 200;
      default:
        return 0;
    }
  };

  onFillOut = (newName, newValue) => {
    console.log(newName + newValue);
    this.setState({
      indicators: this.props.list.filter( x => {
        return x.name !== newName
      }).concat({
        name: newName,
        value: newValue
      })
    }, function () {
      this.props.onChange(this.state.indicators);
    })
  };

  blurCertHandler = (newValue) => {
    if (newValue !== '') {
      // let convValue = this.convertBall(newValue);
      let convValue = convertMark(newValue);
      console.log(convValue);
      this.onFillOut("Середній бал атестату", convValue);
    }
    else {
      this.onFillOut("Середній бал атестату", 0);
    }
  };
  blurCoursesHandler = (newValue) => {
    if (newValue !== '') {
      this.onFillOut("Бал за підготовчі курси", newValue);
    }
    else {
      this.onFillOut("Бал за підготовчі курси", 0);
    }
  };

  render() {
    return (
      <div className="App-panel App-panel-ball">
        <div className="App-bal-row">
          <div className="Icon-name-row">
            <Create />
          </div>
          <div className="Icon-name-row">
            <NumberInput name="Середній бал атестату" onBlur={this.blurCertHandler} floatingLabelText="Середній бал атестату"  min={1} max={12} hintText="за 12 шкалою"/>
          </div>
        </div>
        <div className="App-bal-row">
          <div className="Icon-name-row">
            <Create />
          </div>
          <div className="Icon-name-row">
            <NumberInput name="Бал за підготовчі курси" onBlur={this.blurCoursesHandler} floatingLabelText="Бал за підготовчі курси"  min={100} max={200} hintText="за шкалою від 100 до 200" />
          </div>
        </div>
      </div>
    );
  }
}

export default IndicatorsRating;
