// @flow

import React from 'react'
import Helmet from 'react-helmet'
import injectSheet from 'react-jss'

// import AddMonthButton from '../../container/add-month-button'
import GetActivities from '../../container/get-activities'

const title = 'Add Month Page'

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

/* eslint-disable */
const AddMonthPage = ({ classes }: { classes: Object }) =>
  <div className={`container activities`}>
    <Helmet
      title={title}
      meta={[
        { name: 'description', content: 'A page to add months' },
        { property: 'og:title', content: title },
      ]}
    />
    <h1>{title}</h1>

    <GetActivities {...{classes}}/>

    <div style={{ width: 800, marginTop: 20 }}>
      <div style={{ width: 150, float: 'left' }}>Project list</div>
      <div style={{ width: 600, float: 'right' }}>Activity</div>
      <div style={{ width: 150, float: 'left', height: 200, border: '1px solid gray' }}>
        <select multiple={true} style={{ width: 150, height: 200 }}>
        {
          [
            { projectId: 1, projectName: 'Project 1' },
            { projectId: 2, projectName: 'Project 2' },
            { projectId: 3, projectName: 'Project 3' }
          ].map((item) => {
            return (<option key={`project_${item.projectId}`}>{item.projectName}</option>)
          })
        }
        </select>
      </div>
      <div style={{ width: 600, float: 'right', height: 160 }}>
        <div style={{ width: 600, float: 'right', height: 100 }}>
          <textarea style={{width:600, height:100, border: '1px solid gray'}} placeholder="Enter activity description..."></textarea>
        </div>
        <div style={{ float: 'right', marginTop: 10 }}>
          <input type="text" placeholder="Hours" style={{height:29}} /><button>Add</button>
        </div>
      </div>
    </div>
  </div>
/* eslint-enable */

export default injectSheet(styles)(AddMonthPage)
