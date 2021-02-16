import React from "react";
import Home from "./components/Home.jsx";
import Ourbrands from "./components/Ourbrands.jsx";

import Contactus from "./components/Contactus.jsx";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: "home",
    };
    this.changeView = this.changeView.bind(this);
  }

  //!show pages function
  changeView(option) {
    this.setState({
      view: option,
    });
  }

  //! The render view funstion
  renderView() {
    const { view } = this.state;
    if (view === "home") {
      return <Home />;
    } else if (view === "ourbrands") {
      return <Ourbrands />;

    } else if (view === "contactus") {
      return <Contactus />;
    }

    } 

  }

  render() {
    return (
      <div>
        <nav>
          <div className="nav">
            <img
              src=""
              className="home"
              onClick={() => this.changeView("home")}
            />

            <span
              className="ourbrands"
              onClick={() => this.changeView("ourbrands")}
            >

              <button
                type="button"
                id="ourbrands"
                className="btn btn-primary"
                onClick={() => this.changeView("ourbrands")}
              >
                Our Brands
                </button>

              <button type="button" id="ourbrands" className="btn btn-primary" onClick={() => this.changeView("ourbrands")}>

                Our Brands
              </button>
            </span>

            <span
              className={
                this.state.view === "home" ? "nav-selected" : "nav-unselected"
              }
            >
              <button
                type="button"
                className="btn btn-success"
                id="contactus"
                onClick={() => this.changeView("contactus")}
              >
                Contact Us
              </button>
            </span>
          </div>
        </nav>

        <div className="main">{this.renderView()}</div>
      </div>
    );
  }


  //this is a test

export default App;
