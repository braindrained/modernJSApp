// @flow

import React from 'react'
import { NavLink } from 'react-router-dom'
import injectSheet from 'react-jss'
import {
  HOME_PAGE_ROUTE,
  HELLO_PAGE_ROUTE,
  HELLO_ASYNC_PAGE_ROUTE,
  NOT_FOUND_DEMO_PAGE_ROUTE,
  ADD_MONTH_PAGE_ROUTE,
  NEW_PAGE_ROUTE,
} from '../routes'

type State = {
  visible: boolean,
  clientWidth: number,
  clientHeight: number,
  opacity: ?number
}

type Props = {
  classes: Object,
}

/* eslint-disable */
class Nav extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)

    // flow-disable-next-line
    this.state = {
      visible: true,
      clientWidth: 0,
      clientHeight: 0,
    }
  }

  componentDidMount() {
    if (localStorage && localStorage.getItem('window')) {
      // flow-disable-next-line
      const windowObject = JSON.parse(localStorage.getItem('window'))

      // flow-disable-next-line
      this.setState({
        visible: windowObject.width > 800,
        clientWidth: windowObject.width,
        clientHeight: windowObject.height,
        opacity: windowObject.width > 800 ? 1 : this.state.opacity,
      })
    }
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
    console.log(this.props)
    return (
      <nav>
        <button onClick={this.handleClick.bind(this)}>
          <img src="/static/img/hamburger.svg" alt="hamb" />
        </button>
        <ul style={this.state && this.state.visible ?
          // flow-disable-next-line
          {
            minWidth: this.state.clientWidth < 800 ? this.state.clientWidth - 52 : '100%',
            left: 0,
            minHeight: this.state.clientWidth < 800 ? this.state.clientHeight : 'auto',
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
            { route: NEW_PAGE_ROUTE, label: 'new' },
          ].map(link => (
            <li key={link.route} className={`${this.props.classes.navLi}`}>
              <NavLink onClick={this.handleClick.bind(this)} to={link.route} activeStyle={{ color: 'blue' }} exact>{link.label}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    )
  }
}
/* eslint-enable */

const styles = {
  navLi: { },
}

export default injectSheet(styles)(Nav)
