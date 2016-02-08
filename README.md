# react-webpack-spinner #

A spinner based on [react-spinner](https://www.npmjs.com/package/react-spinner) but with inline/embeded css (since React down support css-animations)

## Usage ##

'npm install react-webpack-spinner'

And in your component:

``` es6
import Spinner from 'react-spinner'

/* ... */

render () {
  return (
    <div>
      <Spinner width={32} height={32} color={'#ccc'} />
    </div>
  )
}

```

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
