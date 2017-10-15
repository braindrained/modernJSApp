// @flow

import React from 'react'

type ItemMapProps = {
  state: ?Object,
}

/* eslint-disable */
class ItemMap extends React.Component<ItemMapProps> {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    console.log('ItemMap mount', JSON.parse(localStorage.getItem('clientWindow')))
  }

  render() {

    return (
      <div>
        {
          this.props.state ? this.props.state.data.map((item, i) => {
            return (<div key={i}>{item.id} {item.activityDesc} {item.hour}</div>)
          }) : null
        }
      </div>
    )
  }
}

type Props = {
  label: string,
  state: ?Object,
  handleClick: Function,
}

const GetActivities = ({ label, state, handleClick }: Props) =>
  <div>
    <ItemMap {...{ state: state && state.data ? state : { data: [] } }}/>
    <br/>
    <button onClick={handleClick}>{label}</button>
  </div>
/* eslint-enable */

export default GetActivities
