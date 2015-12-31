import React, {DOM} from 'react'
import { renderToStaticMarkup, renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'
import { ReduxRouter } from 'redux-router'
import { match } from 'redux-router/server'

import routes from '../src/routes'
import Html from './html'
import assets from './assets'
import configureStore from '../src/store/configureStore.server'

// inline style render
global.navigator = {
  userAgent: 'Mozilla/5.0 (Macintosh Intel Mac OS X 10_11_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.155 Safari/537.36'
}

const { body, div, script } = DOM

export default (state, req) => {
  const initialState = {
    page: req.body.page || {},
    shared: req.body.shared || {}
  }

  const store = configureStore(initialState, routes)

  const getHtml = (component) => {
    // mui requires the ua to do the autoprefix
    global.navigator.userAgent = req.headers['user-agent']

    return [
      '<!doctype html>',
      '\n',
      renderToString(component)
    ].join('')
  }
  const hydrateOnClient = () => {
    return getHtml(<Html assets={assets} store={store}/>)
  }

  return new Promise((resolve, reject) => {
    store.dispatch(match(req.originalUrl, (error, redirectLocation, routerState) => {
      if (error) {
        return resolve(hydrateOnClient())
      }
      let html = ''

      try {
        const routedStore = store.getState()

        const component = (
          <Provider store={routedStore}>
            <ReduxRouter/>
          </Provider>
        )

        const app = (<Html assets={assets} component={component} store={routedStore}/>)

        html = getHtml(app)

      } catch (e) {
        return resolve(hydrateOnClient())
      }
      resolve(html)
    }))
  })
}
