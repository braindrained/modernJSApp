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

/* eslint-disable */
class Nav extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      visible: false,
      clientWidth: null,
      clientHeight: null,
    }
  }

  componentDidMount() {
    const windowObject = JSON.parse(localStorage.getItem('window'))

    // eslint-disable-next-line react/no-did-mount-set-state
    this.setState({
      visible: windowObject.width > 800,
      clientWidth: windowObject.width,
      clientHeight: windowObject.height,
      opacity: windowObject.width > 800 ? 1 : this.state.opacity,
    })
  }

  handleClick() {
    if (this.state.clientWidth && this.state.clientWidth < 800) {
      this.setState({
        visible: this.state ? !this.state.visible : true,
        opacity: 1,
      })
    }
  }

  render() {
    return (
      <nav>
        <button onClick={this.handleClick.bind(this)}>
          <img src="/static/img/hamburger.svg" alt="hamb" />
        </button>
        <ul style={this.state && this.state.visible ?
          {
            minWidth: this.state.clientWidth < 800 ? this.state.clientWidth - 52 : 'auto',
            left: 0,
            minHeight: this.state.clientHeight,
            opacity: this.state.opacity,
          } : {
            left: this.state.clientWidth < 800 ? `-${this.state.clientWidth - 52}px` : 0,
            opacity: this.state.opacity,
          }
        }>
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
/* eslint-enable */

export default Nav
