// @flow

export const HOME_PAGE_ROUTE = '/'
export const HELLO_PAGE_ROUTE = '/hello'
export const HELLO_ASYNC_PAGE_ROUTE = '/hello-async'
export const NOT_FOUND_DEMO_PAGE_ROUTE = '/404'
export const ADD_MONTH_PAGE_ROUTE = '/add-month'
export const NEW_PAGE_ROUTE = '/new'

export const helloEndpointRoute = (num: ?number) => `/ajax/hello/${num || ':num'}`

export const getActivitiesRoute = (num: ?number) => `/ajax/getactivities/${num || ':num'}`
