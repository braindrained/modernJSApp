// @flow

import { connect } from 'react-redux'

import { getActivities } from '../action/add-month'
import GetActivities from '../component/get-activities'

const mapStateToProps = state => ({
  label: 'Get activities',
  state: state.addmonth ? state.addmonth : [],
})

const mapDispatchToProps = dispatch => ({
  handleClick: () => { dispatch(getActivities(1)) },
})

export default connect(mapStateToProps, mapDispatchToProps)(GetActivities)
