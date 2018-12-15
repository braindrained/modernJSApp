// @flow

import Immutable from 'immutable'
import type { fromJS as Immut } from 'immutable'

import {
  ADD_MONTH_REQUEST,
  ADD_MONTH_SUCCESS,
  ADD_MONTH_FAILURE,
  GET_ACTIVITIES_REQUEST,
  GET_ACTIVITIES_SUCCESS,
  GET_ACTIVITIES_FAILURE,
} from '../action/add-month'

const initialState = Immutable.fromJS({
  message: 'Initial reducer message',
  messageAsync: 'Initial reducer message for async call',
})

const addMonthReducer = (state: Immut = initialState, action: { type: string, payload: any }) => {
  console.log(state);
  switch (action.type) {
    case ADD_MONTH_REQUEST:
      return Object.assign({}, state)
    case ADD_MONTH_SUCCESS:
      return state.set('messageAsync', Object.assign({}, state, action.payload, {
        isFetching: false,
        errorMessage: '',
      }))
    case ADD_MONTH_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        errorMessage: action.payload.message,
      })
    case GET_ACTIVITIES_REQUEST:
      return Object.assign({}, state)
    case GET_ACTIVITIES_SUCCESS: {
      return Object.assign({}, state, action.payload, {
        isFetching: false,
        errorMessage: '',
      })
    }
    case GET_ACTIVITIES_FAILURE: {
      return Object.assign({}, state, {
        isFetching: false,
        errorMessage: action.payload,
      })
    }
    default:
      return state
  }
}

export default addMonthReducer
