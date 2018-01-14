// @flow

import React, { Component } from 'react'
import { connect } from 'react-redux'
import injectSheet from 'react-jss'
import { getActivities } from '../../action/add-month'

const styles = {
  rowItem: {
    width: 800,
    display: 'inline-block',
  },
  rowItemCell: {
    float: 'left',
  },
  firstCell: { width: 100 },
  secondCell: { width: 655 },
  thirdCell: { width: 45 },
  '@media (max-width: 800px)': {
    rowItem: {
      width: '100%',
    },
    firstCell: { width: '33%' },
    secondCell: { width: '33%' },
    thirdCell: { width: '33%' },
  },
}

type State = {}

type Props = {
    classes: Object,
    state: ?Object,
    handleDispatch: Function,
}

class New extends Component<Props, State> {
  constructor(props: Props) {
    super(props)

    // flow-disable-next-line
    this.state = {}
  }

  componentDidMount() {
    this.props.handleDispatch()
  }

  render() {
    return (
      <div>
        {
                this.props.state && this.props.state.data ? this.props.state.data.map(item => (
                  <div key={`activities_${item.id}`} className={this.props.classes.rowItem}>
                    <div className={`${this.props.classes.rowItemCell} ${this.props.classes.firstCell}`}>{item.projectId}</div>
                    <div className={`${this.props.classes.rowItemCell} ${this.props.classes.secondCell}`}>{item.activityDesc}</div>
                    <div className={`${this.props.classes.rowItemCell} ${this.props.classes.thirdCell}`}>{item.hours}</div>
                  </div>
                    )) : null
                }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  label: 'New month',
  state: state.addmonth ? state.addmonth : [],
})

const mapDispatchToProps = dispatch => ({
  handleDispatch: () => { dispatch(getActivities(1)) },
})

export default injectSheet(styles)(connect(mapStateToProps, mapDispatchToProps)(New))
