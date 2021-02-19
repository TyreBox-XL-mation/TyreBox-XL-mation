import React, { Component } from "react";
import axios from "axios";
export class PreAdmin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            latestproduct: [],
            ourservices: [],
            contact: [],
        };
        this.fetchData = this.fetchData.bind(this);
        this.fetchServices = this.fetchServices.bind(this);
        this.fetchContact = this.fetchContact.bind(this);
    }

    componentDidMount() {
        this.fetchData();
        this.fetchServices();
        this.fetchContact();
    }

    fetchData() {
        axios
            .get("/tyrebox/latestproduct")
            .then((response) => {
                console.log(response.data);
                this.setState({ latestproduct: response.data });
            })
            .catch((error) => {
                console.log(error);
            });
    }
    fetchServices() {
        axios
            .get("/tyrebox/ourservices")
            .then((response) => {
                console.log(response.data);
                this.setState({ ourservices: response.data });
            })
            .catch((error) => {
                console.log(error);
            });
    }
    fetchContact() {
        axios
            .get("/tyrebox/admincontact")
            .then((response) => {
                this.setState({ contact: response.data });
            })
            .catch((error) => {
                console.log(error);
            });
    }
    render() {
        return (
            <div>
                <div className="margintitlesadmin">
                    <img
                        id="adminsizeimage"
                        src="https://logodix.com/logo/1707088.png"
                    ></img>

                    <h4 id="welcomeadmin">Welcome to the Admin pannel</h4>
                    <h4 id="titleadmin">Tyre-Box</h4>
                </div>
                <h1 id="lptitle">Latest product</h1>
                <div className="first">
                    <div id="latest-product-card-container">
                        {this.state.latestproduct.map((tyre, index) => (
                            <div key={index} className="latest-product-card">
                                <img src={tyre.image} id="latest-product-img" />
                                <div className="latest-product-container">
                                    <h4>
                                        <b>{tyre.reference}</b>
                                    </h4>
                                    <h3>{tyre.price}</h3>
                                </div>
                                <button
                                    id="deleteproduct"
                                    type="button"
                                    className="btn btn-dark"
                                >
                                    DELETE
                </button>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="latest-service-container">
                    <h1>Our services</h1>
                    <div className="latest-service-heading">
                        {this.state.ourservices.map((service, index) => (
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
                                <button
                                    id="deleteproduct"
                                    type="button"
                                    className="btn btn-dark"
                                >
                                    DELETE
                </button>
                            </div>
                        ))}
                    </div>
                </div>
                <h1 id="contacttitle">CLIENT CONTACTS</h1>
                {this.state.contact.map((info, index) => (
                    <div className="contactsize">
                        <div className="container p-3 my-3 bg-dark text-white">
                            <div>
                                <h3>Name:</h3>
                                <p>{info.name}</p>
                                <h3>mobile:</h3>
                                <p>{info.mobile}</p>
                                <h3>email:</h3>
                                <p>{info.email}</p>
                                <h3>message:</h3>
                                <p>{info.message}</p>
                            </div>
                            <button id="deleteproduct" type="button" className="btn btn-dark">
                                DELETE
              </button>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}

export default PreAdmin;