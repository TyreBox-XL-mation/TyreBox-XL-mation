import React from 'react'
import Latestproduct from './Latestproduct.jsx'
import Latestservices from './Latestservices.jsx'



class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <div className='home'>
        <div>dropdown component</div>
        <div><Latestproduct /></div>
        <div><Latestservices /></div>
      </div>
    )
  }
}

export default Home;