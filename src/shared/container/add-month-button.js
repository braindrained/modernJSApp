// @flow

import { connect } from 'react-redux'

import { addMonth } from '../action/add-month'
import AddMonth from '../component/add-month'

const mapStateToProps = () => ({
  label: 'New month',
  message: '',
})

const mapDispatchToProps = dispatch => ({
  handleClick: () => { dispatch(addMonth({ month: '', text: '' })) },
})

export default connect(mapStateToProps, mapDispatchToProps)(AddMonth)
