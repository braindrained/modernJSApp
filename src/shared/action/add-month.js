// @flow


import 'isomorphic-fetch'

import { createAction } from 'redux-actions'

export const ADD_MONTH_REQUEST = 'ADD_MONTH_REQUEST'
export const ADD_MONTH_SUCCESS = 'ADD_MONTH_SUCCESS'
export const ADD_MONTH_FAILURE = 'ADD_MONTH_FAILURE'

export const addMonthRequest = createAction(ADD_MONTH_REQUEST)
export const addMnothSuccess = createAction(ADD_MONTH_SUCCESS)
export const addMnothFailure = createAction(ADD_MONTH_FAILURE)

// eslint-disable-next-line
export const addMonth = (object: ?Object) => (dispatch: Function) => {

  return fetch('/ajax/addmonth', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    mode: 'cors',
    body: JSON.stringify(object),
  })
    .then((res) => {
      if (!res.ok) throw Error(res.statusText)
      return res.json()
    })
    .then((data) => {
      if (!data.serverMessage) throw Error('No message received')
      dispatch(addMnothSuccess(data.serverMessage))
    })
    .catch(() => {
      dispatch(addMnothFailure())
    })
}
