import React, { Component, PropTypes } from 'react'
import Radium from 'radium'

@Radium
class SampleList extends Component {
  static propTypes = {
    sampleList: PropTypes.array
  }

  static defaultProps = {
    sampleList: [],
  }

  _getItems() {
    const { sampleList } = this.props
    return sampleList.map((item, i) => {
      <li>{ item.title }</li>
    })
  }

  render() {
    return (
      <ul>
        { this._getItems() }
      </ul>
    )
  }
}

export default SampleList
