// @flow

import React from 'react'
import { NavLink } from 'react-router-dom'
import {
  HOME_PAGE_ROUTE,
  HELLO_PAGE_ROUTE,
  HELLO_ASYNC_PAGE_ROUTE,
  NOT_FOUND_DEMO_PAGE_ROUTE,
  ADD_MONTH_PAGE_ROUTE,
} from '../routes'

class Nav extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      visible: true,
    }
  }

  componentDidMount() {
    this.setState({ visible: document.documentElement.clientWidth < 800 ? false : true })
  }

  handleClick() {
    this.setState({ visible: !this.state.visible })
  }

  render() {
    return (
      <nav>
        <button onClick={this.handleClick.bind(this)}>
          <img src="/static/img/hamburger.svg" alt="hamb" />
        </button>
        <ul style={this.state.visible ? { visibility: 'visible', opacity: 1 } : { visibility: 'hidden', opacity: 0 }}>
          {[
            { route: HOME_PAGE_ROUTE, label: 'Home' },
            { route: HELLO_PAGE_ROUTE, label: 'Say Hello' },
            { route: HELLO_ASYNC_PAGE_ROUTE, label: 'Say Hello Asynchronously' },
            { route: NOT_FOUND_DEMO_PAGE_ROUTE, label: '404 Demo' },
            { route: ADD_MONTH_PAGE_ROUTE, label: 'Add month' },
          ].map(link => (
            <li key={link.route}>
              <NavLink onClick={this.handleClick.bind(this)} to={link.route} activeStyle={{ color: 'blue' }} exact>{link.label}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    )
  }
}

export default (Nav)
