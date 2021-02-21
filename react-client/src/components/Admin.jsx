import React, { Component } from "react";
import axios from "axios";
import AddService from "./AddService.jsx";
import AddProduct from "./Addproduct.jsx";
import PreAdmin from "./PreAdmin.jsx";
import Home from "./Home.jsx";
export class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      log: "preAdmin",
    };

    this.changeView = this.changeView.bind(this);
  }

  componentDidMount(){
    console.log('====>admin',this.state)
  }
  changeView(option) {
    this.setState({
      log: option,
    });
  }

  render() {
    return (
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
              <button onClick={this.props.logout} id="homebutton">
                LOGOUT
              </button>
            </a>
          </div>
        </header>
        {this.state.log === "preAdmin" ? (
          <PreAdmin />
        ) : this.state.log === "addproduct" ? (
          <AddProduct />
        ) : (
          <AddService />
        )}
      </div>
    );
  }
}

export default Admin;
