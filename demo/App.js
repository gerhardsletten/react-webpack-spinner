import React, {Component} from 'react'
import Spinner from '../src/Spinner'

export default class App extends Component {

  render () {
    return (
      <div>
        <Spinner width={40} height={40} color={'red'} />
      </div>
    )
  }
}
