import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Page from './page/index';
import { Provider } from 'mobx-react'
import store from './store'
import { BrowserRouter, withRouter, Switch, Redirect, Route, Fragment,hashHistory } from 'react-router-dom'
ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
    <Page />
  </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

