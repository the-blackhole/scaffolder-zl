import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { pushState } from 'redux-router'

class HomePage extends Component {
  static propTypes = {
    pushState: PropTypes.func.isRequired
  }
  componentDidMount() {
    setTimeout(() => {
      this.props.pushState(null, '/sample')
    }, 100)
  }
  render() {
    return (
      <div>
        Loading...
      </div>
    )
  }
}

const mapState = (state) => ({})

export default connect(mapState, { pushState })(HomePage)
