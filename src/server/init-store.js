// @flow

import Immutable from 'immutable'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'

import helloReducer from '../shared/reducer/hello'
import addMonthReducer from '../shared/reducer/add-month'

const initStore = (plainPartialState: ?Object) => {
  const preloadedState = plainPartialState ? {} : undefined

  if (plainPartialState && plainPartialState.hello) {
    // flow-disable-next-line
    preloadedState.hello = helloReducer(undefined, {})
      .merge(Immutable.fromJS(plainPartialState.hello))
  }

  if (plainPartialState && plainPartialState.addmonth) {
    // flow-disable-next-line
    preloadedState.addmonth = addMonthReducer(undefined, {})
      .merge(Immutable.fromJS(plainPartialState.addmonth))
  }

  return createStore(
    combineReducers({ hello: helloReducer, addmonth: addMonthReducer }),
    preloadedState, applyMiddleware(thunkMiddleware),
  )
}

export default initStore
