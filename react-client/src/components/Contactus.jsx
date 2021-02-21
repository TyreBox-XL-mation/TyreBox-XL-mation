import React from "react";
import axios from "axios";
class Contactus extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            mobile: "",
            email: "",
            message: "",
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e) {
        this.setState(
            {
                [e.target.name]: e.target.value,
            })
        console.log(this.state)

    }

    handleSubmit(e) {
        e.preventDefault()
        axios.post('/tyrebox/contact', this.state)
            .then((response) => {
                console.log(response)
            })
            .catch((error) => {
                console.log(error)
            })

    }

    render() {
        return (
            <div className="contact-container">
                <div className="contact-body">
                    <div id="contact-form">
                        <h3 className="contact-h3">Contact us</h3>

                        <form id="contact-form-id" className="contact-form-className">
                            <div className="contact-form-group">
                                <label htmlFor="Name" className="contact-label">
                                    Your name
                </label>
                                <div className="contact-input-group">
                                    <input
                                        type="text"
                                        id="Name"
                                        name="name"
                                        className="contact-form-control"
                                        onChange={this.handleChange}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="contact-form-group">
                                <label htmlFor="Name" className="contact-label">
                                    Your phone number
                </label>
                                <div className="contact-input-group">
                                    <input
                                        type="text"
                                        name="mobile"
                                        className="contact-form-control"
                                        onChange={this.handleChange}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="contact-form-group">
                                <label htmlFor="Email" className="contact-label">
                                    Your email address
                </label>
                                <div className="contact-input-group">
                                    <input
                                        type="email"
                                        id="Email"
                                        name="email"
                                        className="contact-form-control"
                                        onChange={this.handleChange}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="Message" className="contact-label">
                                    Your message
                </label>
                                <div className="contact-input-group">
                                    <textarea
                                        id="Message"
                                        name="message"
                                        className="contact-form-control"
                                        rows="8"
                                        maxLength="3000"
                                        onChange={this.handleChange}
                                        required
                                    ></textarea>
                                </div>
                            </div>

                            <div className="contact-form-group">
                                <button
                                    type="submit"
                                    id="contact-button"
                                    onClick={this.handleSubmit}
                                    className="contact-btn contact-btn-primary contact-btn-lg contact-btn-block"
                                >
                                    Send
                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contactus;