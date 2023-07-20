import React from 'react'
import ReactDOM from 'react-dom'

import Root from './config/root'

const target = document.grtElementById('root')

const render = (Component) => {
    ReactDOM.render(<Component />, target)
}

render(Root)