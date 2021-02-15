import React from 'react';
import ReactDOM from 'react-dom';
import App from './index.jsx'


class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }


  render() {
    return (


      <div>
        Welcome page : onClick on ''knowmore'' button will redirect to Home.jsx component
        <App />
      </div>)
  }
}

ReactDOM.render(<Welcome />, document.getElementById('app'));