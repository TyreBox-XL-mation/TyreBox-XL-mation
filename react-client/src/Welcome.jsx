import React from "react";
import ReactDOM from "react-dom";
import App from "./index.jsx";

class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: false,
    };
  }

  handleClick() {
    this.setState({ view: true });
  }
  render() {
    return (
      <div>
        {!this.state.view ? (
          <div className=" segment">
            <div className="container">
              <div
                id="myCarousel"
                className="carousel slide"
                data-ride="carousel"
              >
                <ol className="carousel-indicators">
                  <li
                    data-target="#myCarousel"
                    data-slide-to="0"
                    className="active"
                  ></li>
                  <li data-target="#myCarousel" data-slide-to="1"></li>
                  <li data-target="#myCarousel" data-slide-to="2"></li>
                </ol>

                <div className="carousel-inner">
                  <div className="item active">
                    <img
                      src="https://fl-discounttyres-media.s3.amazonaws.com/uploads/2018/10/goodyear-assurance-triplemax-2.png"
                      alt="Los Angeles"
                    />
                    <div className="carousel-caption">
                      <button
                        type="button"
                        className="btn btn-warning details"
                        onClick={this.handleClick.bind(this)} >
                        Know more
                      </button>
                      {/* <h3>Quality</h3>
                  <p>Quality</p> */}
                    </div>
                  </div>


                  <div className="item">
                    <img
                      src="https://fl-discounttyres-media.s3.amazonaws.com/uploads/2018/10/goodyear-assurance-triplemax-2.png"
                      alt="Chicago"
                    />
                    <div className="carousel-caption">
                      <button
                        type="button"
                        className="btn btn-warning details"
                        onClick={this.handleClick.bind(this)}
                      >
                        Know more
                      </button>
                      {/* <h3>Chicago</h3>
                  <p>Thank you, Chicago!</p> */}
                    </div>
                  </div>

                  <div className="item">
                    <img
                      src="https://fl-discounttyres-media.s3.amazonaws.com/uploads/2018/10/goodyear-assurance-triplemax-2.png"
                      alt="New York"
                    />
                    <div className="carousel-caption">
                      <button
                        type="button"
                        className="btn btn-warning details"
                        onClick={this.handleClick.bind(this)}
                      >
                        Know more
                      </button>
                      {/* <h3>New York</h3>
                  <p>We love the Big Apple!</p> */}
                    </div>
                  </div>
                </div>

                <a
                  className="left carousel-control"
                  href="#myCarousel"
                  data-slide="prev"
                >
                  <span className="glyphicon glyphicon-chevron-left"></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a
                  className="right carousel-control"
                  href="#myCarousel"
                  data-slide="next"
                >
                  <span className="glyphicon glyphicon-chevron-right"></span>
                  <span className="sr-only">Next</span>
                </a>
              </div>
            </div>
          </div>
        ) : (
            <App />
          )}
      </div>
    );

  }
}

ReactDOM.render(<Welcome />, document.getElementById("app"));
