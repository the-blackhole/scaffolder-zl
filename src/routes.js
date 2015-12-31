import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './containers/App'
import SampleHome from './containers/SampleHome'

export default (
  <Route path="/" component={ App }>
    <IndexRoute component={SampleHome} />
    <Route name="首页" path="home" component={ SampleHome } />
  </Route>
)
