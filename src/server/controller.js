// @flow

import request from 'superagent'

export const homePage = () => null

/*export const helloPage = () => ({
  hello: { message: 'Server-side preloaded message' },
})*/

export const helloPage = () =>
  new Promise((resolve, reject) => {

    request.get('https://images-1.casa.it/655x483/listing/ac69900125786fb26f5866b202ab257c')
      .then((x) => {
        resolve({
          hello: {
            object: x
          }
        })
      })

  })

export const helloAsyncPage = () => ({
  hello: { messageAsync: 'Server-side preloaded message for async page' },
})

export const addMonthPage = (responseData) => ({
  addmonth: { messageAsync: 'Add new month', responseData: responseData },
})

export const New = () => ({
  mew: { messageAsync: 'new' },
})

export const helloEndpoint = (num: number) => ({
  serverMessage: `Hello from the server! (received ${num})`,
})
