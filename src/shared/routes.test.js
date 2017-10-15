import { helloEndpointRoute, getActivitiesRoute } from './routes'

test('helloEndpointRoute', () => {
  expect(helloEndpointRoute()).toBe('/ajax/hello/:num')
  expect(helloEndpointRoute(123)).toBe('/ajax/hello/123')
})

test('getActivitiesRoute', () => {
  expect(getActivitiesRoute()).toBe('/ajax/getactivities/:num')
  expect(getActivitiesRoute(1)).toBe('/ajax/getactivities/1')
})
