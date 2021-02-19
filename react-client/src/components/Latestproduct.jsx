import React from "react";

class Latestproduct extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    //rendering and mapping  the cards
    return (
      <div>
        <h1 id="lptitle">Latest product</h1>
        <div id="latest-product-card-container">
          {this.props.latestproduct.map((tyre, index) => (
            <div key={index} className="latest-product-card">
              <img src={tyre.image} id="latest-product-img" />
              <div className="latest-product-container">
                <h4>
                  <b>{tyre.reference}</b>
                </h4>
                <h3>{tyre.price}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default Latestproduct;
