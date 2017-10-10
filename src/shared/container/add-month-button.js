// @flow

import { connect } from 'react-redux'

import { addMonth } from '../action/add-month'
import Button from '../component/button'

const mapStateToProps = state => ({
  label: 'New month',
  message: state.addmonth.get('messageAsync'),
})

const mapDispatchToProps = dispatch => ({
  handleClick: () => { dispatch(addMonth({ month: '', text: '' })) },
})

export default connect(mapStateToProps, mapDispatchToProps)(Button)
