import axios from "axios";
import React, { Component } from "react";
import Admin from "./Admin.jsx";
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      view: "login",
      isLoggedIn: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.logIn = this.logIn.bind(this);
    this.changeView = this.changeView.bind(this);
    this.renderView = this.renderView.bind(this);
  }

  changeView(option) {
    this.setState({
      view: option,
    });
  }

  renderView() {
    const { view } = this.state;
    if (view === "login") {
      return (
        <div className="log-container" ref={this.props.containerRef}>
          <div className="log-content">
            <div className="log-img">
              <img
                src="https://i.ibb.co/nf54mCC/1707088-1.png"
                className="actual-img"
              />
            </div>
            <div className="log-form">
              <div className="log-form-group">
                <label htmlFor="username" className="log-label">
                  Username
                </label>
                <input
                  type="text"
                  name="username"
                  className="log-input"
                  placeholder="username"
                  onChange={this.handleChange}
                />
              </div>
              <div className="log-form-group">
                <label htmlFor="password" className="log-label">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  className="log-input"
                  placeholder="password"
                  onChange={this.handleChange}
                />
              </div>
            </div>
          </div>
          <div className="log-footer">
            <button type="button" className="log-btn" onClick={this.logIn}>
              Login
            </button>
          </div>
          <div className="title-switcher-container">
            {this.props.changeTitle}
          </div>
        </div>
      );
    } else if (view === "connected") {
      return <Admin />;
    }
  }

  handleChange(e) {
    this.setState(
      {
        [e.target.name]: e.target.value,
      },
      () => {
        console.log(this.state);
      }
    );
  }

  logIn() {
    axios
      .post("/tyrebox/login", this.state)
      .then((response) => {
        if (response.data.auth) {
          this.changeView("connected");

          this.setState({ isLoggedIn: response.data.result.username });
          console.log(response.data);
          localStorage.setItem("token", response.data.token);
          console.log(response);
        } else {
          alert(response.data.message);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return <div>{this.renderView()}</div>;
  }
}
