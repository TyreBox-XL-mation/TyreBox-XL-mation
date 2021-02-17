import React from "react";
import Latestproduct from "./Latestproduct.jsx";
import Latestservices from "./Latestservices.jsx";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="home">
          {/* <div className="lower">dropdown component</div> */}
          <div>
            <Latestproduct />
          </div>
          <div>
            <Latestservices />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
