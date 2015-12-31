import React, { Component, PropTypes } from 'react'

import {
  AppCanvas,
  Mixins
} from 'material-ui'

const { StylePropable } = Mixins

export default class App extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired
  }

  static mixins = [StylePropable]

  render() {
    return (
      <AppCanvas>
        <div>
          { this.props.children }
        </div>
      </AppCanvas>
    )
  }
}
