import React from "react";
import axios from "axios";
class AddService extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            image: "",
            servicename: "",
            description: "",
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
        });
        console.log(this.state);
    }

    handleSubmit(e) {
        e.preventDefault();
        axios
            .post("/tyrebox/ourservices", this.state)
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        return (
            <div className="add-container">
                <div className="add-body">
                    <div id="add-form">
                        <h3 className="add-h3">add service</h3>

                        <form id="add-form-id" className="add-form-className">
                            <div className="add-form-group">
                                <label htmlFor="service name" className="add-label">
                                    Service name
                </label>
                                <div className="add-input-group">
                                    <input
                                        type="text"
                                        id="Name"
                                        name="service name"
                                        className="add-form-control"
                                        onChange={this.handleChange}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="add-form-group">
                                <label htmlFor="Name" className="add-label">
                                    Image url
                </label>
                                <div className="add-input-group">
                                    <input
                                        type="text"
                                        name="image"
                                        className="add-form-control"
                                        onChange={this.handleChange}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="description" className="add-label">
                                    Description
                </label>
                                <div className="add-input-group">
                                    <textarea
                                        id="Message"
                                        name="message"
                                        className="add-form-control"
                                        rows="8"
                                        maxLength="3000"
                                        onChange={this.handleChange}
                                        required
                                    ></textarea>
                                </div>
                            </div>

                            <div className="add-form-group">
                                <button
                                    type="submit"
                                    id="add-button"
                                    onClick={this.handleSubmit}
                                    className="add-btn add-btn-primary add-btn-lg add-btn-block"
                                >
                                    add
                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddService;