import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { load } from '../actions/sample'
import SampleList from '../components/SampleList'

class SampleHomePage extends Component {
  static propTypes = {
    actions: PropTypes.object.isRequired,
    sampleList: PropTypes.array
  }

  componentDidMount() {
    this.props.actions.load()
  }

  render() {
    const { sampleList, ...props } = this.props
    return (
      <SampleList sampleList={ sampleList } {...props}/>
    )
  }
}

const SampleHomeActions = { load }

const mapState = (state) => ({
  sampleList: state.page.sampleList
})
const mapAction = (dispatch) => ({
  actions: bindActionCreators(SampleHomeActions, dispatch)
})

export default connect(mapState, mapAction)(SampleHomePage)
