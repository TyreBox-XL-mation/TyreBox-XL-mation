import React from "react";


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
                    {this.props.ourservices.map((service, index) => (
                        <div key={index} className="latest-service-card">
                            <div className="latest-service-card-header">
                                <h1>{service.servicename}</h1>
                                <div>
                                    <img className="latest-service-img" src={service.image} />
                                </div>
                                <div className="latest-service-description">
                                    <p> {service.description} </p>
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