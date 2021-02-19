import React from 'react'
import Latestproduct from './Latestproduct.jsx'
import Latestservices from './Latestservices.jsx'
import Dropdown from './Dropdown.jsx'
import axios from 'axios'


class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      latestproduct: [],
      ourservices: []
    }
    this.fetchData = this.fetchData.bind(this);
    this.fetchDataSecond = this.fetchDataSecond.bind(this)
  }

  componentDidMount() {
    this.fetchData()
    this.fetchDataSecond()
  }

  fetchData() {
    axios.get('/tyrebox/latestproduct').then((response) => {
      console.log(response.data)
      this.setState({ latestproduct: response.data })
    }).catch(error => {
      console.log(error)
    })
  }

  fetchDataSecond() {
    axios.get('/tyrebox/ourservices').then((response) => {
      this.setState({ ourservices: response.data })
    }).catch(error => {
      console.log(error)
    })
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <div className='home'>
          <div className='homeimage'><img id='homeimg' src='https://autoservicekole.nl/wp-content/uploads/2017/09/wheel-2373040_1920.jpg' /></div>
          <div ><Dropdown /></div>
          <div><Latestproduct latestproduct={this.state.latestproduct} /></div>
          <div><Latestservices ourservices={this.state.ourservices} /></div>
        </div>
      </div>
    );
  }
}

export default Home;
