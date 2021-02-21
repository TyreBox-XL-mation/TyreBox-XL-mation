import React, { Component } from "react";
import bcrypt from "bcryptjs";
import axios from "axios";
export default class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            email: "",
            password: "",
        };
        this.handleChange = this.handleChange.bind(this);
        this.signUp = this.signUp.bind(this);
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
    signUp() {
        bcrypt.hash(this.state.password, 8, (err, hash) => {
            if (err) {
                console.log("error");
            }
            console.log(hash);
            axios.post("/tyrebox/signup", {
                username: this.state.username,
                email: this.state.email,
                password: hash,
            });
        });
    }

    render() {
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
                            <label htmlFor="email" className="log-label">
                                Email
              </label>
                            <input
                                type="email"
                                name="email"
                                className="log-input"
                                placeholder="email"
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
                    <button type="button" className="log-btn" onClick={this.signUp}>
                        Sign Up
          </button>
                </div>
                <div className="title-switcher-container">{this.props.changeTitle}</div>
            </div>
        );
    }
}
