import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { goBack } from 'redux-router'
import Radium from 'radium'

import { FlatButton } from 'material-ui'

@Radium
export default class BackButton extends Component {
  static propTypes = {
    label: PropTypes.string,
    goBack: PropTypes.func.isRequired,
    position: PropTypes.oneOf(['left', 'right'])
  }

  static defaultProps = {
    label: '返回',
    position: 'left'
  }

  render() {
    const { position } = this.props
    return (
      <FlatButton
        style={ styles[position] }
        label={ this.props.label }
        linkButton
        onTouchTap={ this.props.goBack }
      />
    )
  }
}

export default connect(state => ({}), { goBack })(BackButton)

const styles = {
  left: {
    backgroundColor: 'transparent',
    color: '#eee',
    minWidth: '60px',
    lineHeight: '48px',
    position: 'absolute',
    left: '0',
    top: '0'
  },
  right: {
    backgroundColor: 'transparent',
    color: '#eee',
    minWidth: '60px',
    lineHeight: '48px',
    position: 'absolute',
    right: '0',
    top: '0'
  }
}
