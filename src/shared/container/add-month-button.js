// @flow

import { connect } from 'react-redux'

import { addMonth } from '../action/add-month'
import Button from '../component/button'

const mapStateToProps = () => ({
  label: 'Say hello asynchronously and send 1234',
})

const mapDispatchToProps = dispatch => ({
  handleClick: () => { dispatch(addMonth({ month: '', text: '' })) },
})

export default connect(mapStateToProps, mapDispatchToProps)(Button)
