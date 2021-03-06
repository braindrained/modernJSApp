// @flow

import React from 'react'

type Props = {
  label: string,
  handleClick: Function,
}

/* eslint-disable */
const Button = ({ label, handleClick }: Props) =>
  <div>
    <button onClick={handleClick}>{label}</button>
  </div>
/* eslint-enable */

export default Button
