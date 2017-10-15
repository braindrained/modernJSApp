// @flow

import React from 'react'

type Props = {
  label: string,
  message: string,
  handleClick: Function,
}

/* eslint-disable */
const AddMonth = ({ label, message, handleClick }: Props) =>
  <div>
    <span>{message}</span>
    <br/>
    <button onClick={handleClick}>{label}</button>
  </div>
/* eslint-enable */

export default AddMonth
