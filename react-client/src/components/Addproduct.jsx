import React from "react";
import axios from "axios";
import swal from "sweetalert";

class AddProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: "",
      reference: "",
      price: "",
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
      .post("/tyrebox/adminproduct", this.state)
      .then((response) => {
        swal("Product added!", "Congrats dear admin!", "success");
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
            <h3 className="add-h3">Add product</h3>

            <form id="add-form-id" className="add-form-className">
              <div className="add-form-group">
                <label htmlFor="image" className="add-label">
                  image url
                </label>
                <div className="add-input-group">
                  <input
                    type="text"
                    id="Name"
                    name="image"
                    className="add-form-control"
                    onChange={this.handleChange}
                    required
                  />
                </div>
              </div>

              <div className="add-form-group">
                <label htmlFor=" reference" className="add-label">
                  reference
                </label>
                <div className="add-input-group">
                  <input
                    type="text"
                    name="reference"
                    className="add-form-control"
                    onChange={this.handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="price" className="add-label">
                  price
                </label>
                <div className="add-input-group">
                  <textarea
                    id="Message"
                    name="price"
                    className="add-form-control"
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
                  ADD PRODUCT
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default AddProduct;
