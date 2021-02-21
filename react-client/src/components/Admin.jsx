import React, { Component } from "react";
import axios from "axios";
import AddService from "./AddService.jsx";
import AddProduct from "./Addproduct.jsx";
import PreAdmin from "./PreAdmin.jsx";
import App from "../index.jsx"
import Home from "./Home.jsx";
export class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      log: "preAdmin",
    };

    this.changeView = this.changeView.bind(this);
  }

  componentDidMount() {

  }
  changeView(option) {
    this.setState({
      log: option,
      isLoggedIn: false,
    });
  }


  logout() {

    localStorage.removeItem("token");
    this.changeView("welcome");
    console.log('kokok')
    this.setState({ isLoggedIn: true });

  }

  render() {
    return (
      <div>
        {this.state.log === "preAdmin" ? (
          <div>
            <header className="box">
              <div className="boximg">
                <img
                  onClick={() => this.changeView("preAdmin")}
                  id="logo"
                  src="logo/logo.png"
                ></img>
              </div>
              <div className="together">
                <a className="cta" href="#">
                  <button onClick={() => this.changeView("addproduct")}>
                    ADD PRODUCT
              </button>
                </a>

                <a className="cta" href="#">
                  <button
                    id="leftbutton"
                    onClick={() => this.changeView("addservices")}
                  >
                    ADD SERVICES
              </button>
                </a>
                <a className="cta" href="#">
                  <button onClick={this.logout.bind(this)} id="homebutton">
                    LOGOUT
              </button>
                </a>
              </div>
            </header>

            <PreAdmin />
          </div>
        ) : this.state.log === "addproduct" ? (
          <AddProduct />
        ) : this.state.log === "addservices" ? (
          <AddService />
        ) : (
                <App />
              )}
      </div>
    );
  }
}

export default Admin;
