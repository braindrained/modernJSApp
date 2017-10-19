// @flow

import React from 'react'

type Props = {
  label: string,
  state: ?Object,
  handleClick: Function,
  classes: Object
}

/* eslint-disable */
const GetActivities = ({ label, state, handleClick, classes }: Props) =>
  <div>
    <div className={classes.rowItem}>
      <div className={`${classes.rowItemCell} ${classes.firstCell}`}>Project</div>
      <div className={`${classes.rowItemCell} ${classes.secondCell}`}>Activity</div>
      <div className={`${classes.rowItemCell} ${classes.thirdCell}`}>Hours</div>
    </div>
    {
      state && state.data ? state.data.map((item) => {
        return (
          <div key={`activities_${item.id}`} className={classes.rowItem}>
            <div className={`${classes.rowItemCell} ${classes.firstCell}`}>{item.projectId}</div>
            <div className={`${classes.rowItemCell} ${classes.secondCell}`}>{item.activityDesc}</div>
            <div className={`${classes.rowItemCell} ${classes.thirdCell}`}>{item.hours}</div>
          </div>
        )
      }) : null
    }
    <br />
    <button onClick={handleClick}>{label}</button>
  </div>
/* eslint-enable */

export default GetActivities
