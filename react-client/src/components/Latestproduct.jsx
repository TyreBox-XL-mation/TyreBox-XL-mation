import React from "react";
//importing fake data from L-P-fakedata.js'
import lp from "../../../L-P-fakedata.js";

class Latestproduct extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        //rendering and mapping  the cards
        return (
            <div id="latest-product-card-container">
                {lp.map((element, index) => (
                    <div key={index} className="latest-product-card">
                        <img src={element.image} className="latest-product-img" />
                        <div className="latest-product-container">
                            <h4>
                                <b>{element.reference}</b>
                            </h4>
                            <h3>{element.price}</h3>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}
export default Latestproduct;