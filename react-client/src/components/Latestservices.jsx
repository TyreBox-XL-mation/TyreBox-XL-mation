import React from "react";
//importing fake data from A-S-fakedata.js'
import data from "../../../A-S-fakedata";

class Latestservices extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    //rendering and mapping  the cards
    return (
      <div className="latest-service-container">
        <h1>Our services</h1>
        <div className="latest-service-heading">
          {data.map((element, index) => (
            <div key={index} className="latest-service-card">
              <div className="latest-service-card-header">
                <h1>{element.servicename}</h1>
                <div>
                  <img className="latest-service-img" src={element.image} />
                </div>
                <div className="latest-service-description">
                  <p> {element.description} </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default Latestservices;
