import React from 'react'
import Latestproduct from './Latestproduct.jsx'
import Latestservices from './Latestservices.jsx'
import Dropdown from './Dropdown.jsx'



class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <div>
        <div className='home'>
          <div className='homeimage'><img id='homeimg' src='https://autoservicekole.nl/wp-content/uploads/2017/09/wheel-2373040_1920.jpg' /></div>
          <div ><Dropdown /></div>
          <div><Latestproduct /></div>
          <div><Latestservices /></div>
        </div>
      </div>
    )
  }
}

export default Home;