import React, {Component, PropTypes} from 'react'
import s from 'react-prefixr'
import './Spinner.css'

class Spinner extends Component {

  styles () {
    const {width, height, color} = this.props
    return {
      container: {
        display: 'inline-block',
        verticalAlign: 'middle',
        width: width,
        height: height
      },
      spinner: {
        position: 'relative',
        width: width,
        height: height,
        display: 'inline-block',
        top: '50%',
        left: '50%'
      },
      bar: {
        borderRadius: '5px',
        backgroundColor: color,
        position: 'absolute',
        width: '20%',
        height: '7.8%',
        top: '-3.9%',
        left: '-10%'
      }
    }
  }

  renderBars () {
    const {bar} = this.styles()
    let bars = []
    for (var i = 0; i < 12; i++) {
      bars.push(
        <div style={s(Object.assign({}, {
          animationDelay: (i - 12) / 10 + 's',
          WebkitAnimationDelay: (i - 12) / 10 + 's',
          transform: 'rotate(' + (i * 30) + 'deg) translate(146%)'
        }, bar))} className='react-spinner-bar' key={i} />
      )
    }
    return bars
  }
  render () {
    const {container, spinner} = this.styles()
    return (
      <div className='react-spinner-container' style={s(container)}>
        <div className='react-spinner' style={s(spinner)}>
          {this.renderBars()}
        </div>
      </div>
    )
  }
}

Spinner.defaultProps = {
  height: 32,
  width: 32,
  color: '#aaa'
}

Spinner.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number,
  color: PropTypes.string
}

export default Spinner
