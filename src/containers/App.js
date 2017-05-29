import React, { Component } from 'react';
import '../App.css';
import logo from '../logo.png';
import Panel from '../components/Panel';
import CoursesList from '../components/CoursesList';
import IndicatorsRating from '../components/IndicatorsRating';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {green400, lime900, grey700, lime50} from 'material-ui/styles/colors';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/index';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: green400
  },
  appBar: {
    height: 50,
  },
  svgIcon: {
    color: lime900,
  },
  checkbox: {
    labelColor: lime900,
    labelDisabledColor: lime900,
    fontWeight: 100,
  },
  textField: {
    textColor: lime900,
    floatingLabelColor: lime900,
  },
  tableRow: {
    textColor: grey700,
    stripeColor: lime50,
  },
  radioButton: {
    labelColor: lime900,
    labelDisabledColor: lime900,
  },
});


class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div className="App">
            <div className="App-header">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-lg-12">
                    <img src={logo} className="App-logo" alt="logo" />
                  </div>
                </div>
              </div>
            </div>
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-3 col-md-3 App-panel-block">
                      <IndicatorsRating onChange={this.props.onChange} list={this.props.list} />
                      <Panel onChange={this.props.onChange} list={this.props.list} />
                </div>
                <div className="col-lg-9 col-md-9">
                  <CoursesList list={this.props.list} />
                </div>
              </div>
            </div>
          <div className="App-footer">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-12 text-right">
                  <p>&copy; 1937-{new Date().getFullYear()} Донецький національний університет імені Василя Стуса</p>
                  <p>Використання будь-яких матеріалів, розміщених на даному сайті, дозволяється за умови посилання на
                  <a href="https://www.donnu.edu.ua"> &nbsp;www.donnu.edu.ua.&nbsp;</a><br/>Для
                  Для інтернет-видань &ndash; обов'язковим є пряме посилання, відкрите для пошукових систем.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    list: state.list
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onChange: bindActionCreators(actions.updateList, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);