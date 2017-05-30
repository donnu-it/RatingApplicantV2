import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {green400, lime900, grey700, lime50} from 'material-ui/styles/colors';
import '../App.css';

import * as actions from '../actions/index';

import * as components from './../components';

const { Header, MainContent, Footer } = components;

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

const App = (props) => {
  return (
    <MuiThemeProvider muiTheme={muiTheme}>
      <div className="App">
        <Header />
        <MainContent {...props} />
        <Footer />
      </div>
    </MuiThemeProvider>
  );
};

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