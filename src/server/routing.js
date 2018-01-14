// @flow

import {
  homePage,
  helloPage,
  helloAsyncPage,
  addMonthPage,
  helloEndpoint,
  New,
} from './controller'

import {
  HOME_PAGE_ROUTE,
  HELLO_PAGE_ROUTE,
  HELLO_ASYNC_PAGE_ROUTE,
  ADD_MONTH_PAGE_ROUTE,
  NEW_PAGE_ROUTE,
  helloEndpointRoute,
  getActivitiesRoute,
} from '../shared/routes'

import renderApp from './render-app'

export default (app: Object) => {
  app.get(HOME_PAGE_ROUTE, (req, res) => {
    res.send(renderApp(req.url, homePage()))
  })

  app.get(HELLO_PAGE_ROUTE, (req, res) => {
    res.send(renderApp(req.url, helloPage()))
  })

  app.get(HELLO_ASYNC_PAGE_ROUTE, (req, res) => {
    res.send(renderApp(req.url, helloAsyncPage()))
  })

  app.get(ADD_MONTH_PAGE_ROUTE, (req, res) => {
    // eslint-disable-next-line
    console.log(req.headers['user-agent'])
    res.send(renderApp(req.url, addMonthPage()))
  })

  app.get(NEW_PAGE_ROUTE, (req, res) => {
    // eslint-disable-next-line
    console.log(req.headers['user-agent'])
    res.send(renderApp(req.url, New()))
  })

  app.get(helloEndpointRoute(), (req, res) => {
    res.json(helloEndpoint(req.params.num))
  })

  app.get(getActivitiesRoute(), (req, res) => {
    /* eslint-disable */
    console.log('routing.js', req.body)

    const responseData = [
      { id: 1, projectId: 1, activityDesc: 'desc', hours: 10 },
      { id: 2, projectId: 3, activityDesc: 'desc', hours: 8 }
    ]
    /* eslint-enable */

    res.json({ serverMessage: 'done activities', data: responseData })
  })

  app.post('/ajax/addmonth', (req, res) => {
    // eslint-disable-next-line no-console
    console.log(req.body)
    res.json({ serverMessage: 'done' })
  })

  app.get('/500', () => {
    throw Error('Fake Internal Server Error')
  })

  app.get('*', (req, res) => {
    res.status(404).send(renderApp(req.url))
  })

  // eslint-disable-next-line no-unused-vars
  app.use((err, req, res, next) => {
    // eslint-disable-next-line no-console
    console.error(err.stack)
    res.status(500).send('Something went wrong!')
  })
}
