// @flow

import React from 'react'
import Helmet from 'react-helmet'

import AddMonthButton from '../../container/add-month-button'
import GetActivities from '../../container/get-activities'

const title = 'Add Month Page'

/* eslint-disable */
const AddMonthPage = () =>
  <div className="container">
    <Helmet
      title={title}
      meta={[
        { name: 'description', content: 'A page to add months' },
        { property: 'og:title', content: title },
      ]}
    />
    <h1>{title}</h1>

    <GetActivities />

    <AddMonthButton />
  </div>
/* eslint-enable */

export default AddMonthPage
