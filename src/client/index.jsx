// @flow

import 'babel-polyfill'

import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { BrowserRouter } from 'react-router-dom'
import Immutable from 'immutable'

import App from '../shared/app'
import helloReducer from '../shared/reducer/hello'
import addMonthReducer from '../shared/reducer/add-month'
import { APP_CONTAINER_SELECTOR, JSS_SSR_SELECTOR } from '../shared/config'
import { isProd } from '../shared/util'
import setUpSocket from './socket'

/* eslint-disable no-underscore-dangle */
const composeEnhancers = (isProd ? null : window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose
const preloadedState = window.__PRELOADED_STATE__
/* eslint-enable no-underscore-dangle */

/* eslint-disable function-paren-newline */
const store = createStore(combineReducers(
  { hello: helloReducer, addmonth: addMonthReducer }),
{
  hello: Immutable.fromJS(preloadedState.hello),
  addmonth: Immutable.fromJS(preloadedState.addmonth),
},
composeEnhancers(applyMiddleware(thunkMiddleware)),
)
/* eslint-disable function-paren-newline */

const rootEl = document.querySelector(APP_CONTAINER_SELECTOR)

/* eslint-disable */
const wrapApp = (AppComponent, reduxStore) =>
  <Provider store={reduxStore}>
    <BrowserRouter>
      <AppContainer>
        <AppComponent />
      </AppContainer>
    </BrowserRouter>
  </Provider>

// flow-disable-next-line
ReactDOM.hydrate(wrapApp(App, store), rootEl)
/* eslint-enable */

if (module.hot) {
  // flow-disable-next-line
  module.hot.accept('../shared/app', () => {
    // eslint-disable-next-line global-require
    const NextApp = require('../shared/app').default
    // flow-disable-next-line
    ReactDOM.hydrate(wrapApp(NextApp, store), rootEl)
  })
}

const jssServerSide = document.querySelector(JSS_SSR_SELECTOR)
// flow-disable-next-line
jssServerSide.parentNode.removeChild(jssServerSide)

setUpSocket(store)
