import React from "react";

//contact class
class Contactus extends React.Component {
  render() {
    return (
      <div className="container-contact">
        <div className="contact-body">
          <div id="contact-form">
            <h3 className="contact-h3">Contact us</h3>

            <form
              id="contact-form-id"
              className="contact-form-className"
              method="post"
              action="contact-form-process.js"
            >
              <div className="contact-form-group">
                <label htmlFor="Name" className="contact-label">
                  Your name
                </label>
                <div className="contact-input-group">
                  <input
                    type="text"
                    id="Name"
                    name="Name"
                    className="contact-form-control"
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
                    name="Email"
                    className="contact-form-control"
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
                    type="tel"
                    pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                    className="contact-form-control"
                  />
                </div>
              </div>

              <div className="contact-form-group">
                <label htmlFor="Message" className="contact-label">
                  Your message
                </label>
                <div className="contact-input-group">
                  <textarea
                    id="Message"
                    name="Message"
                    className="contact-form-control"
                    rows="6"
                    maxLength="3000"
                    required
                  ></textarea>
                </div>
              </div>

              <div className="contact-form-group">
                <button
                  type="submit"
                  id="contact-button"
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
