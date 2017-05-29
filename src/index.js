import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import App from './containers/App';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App history={browserHistory} />
  </Provider>,
  document.getElementById('root')
);
