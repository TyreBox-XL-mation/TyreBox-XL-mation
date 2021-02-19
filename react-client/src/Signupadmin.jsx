import React from "react";
import Login from "./components/Login.jsx";
import Signup from "./components/SignUp.jsx";

class Signupadmin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            view: true,
        };
        this.changeView = this.changeView.bind(this);
        this.renderView = this.renderView.bind(this);
        this.renderTitle = this.renderTitle.bind(this);
    }

    renderTitle() {
        const { view } = this.state;
        if (view === true) {
            return (
                <button className="title-switcher-btn" onClick={this.changeView}>
                    Go to Sign Up
                </button>
            );
        } else if (view === false) {
            return (
                <button className="title-switcher-btn" onClick={this.changeView}>
                    Go to Login
                </button>
            );
        }
    }
    changeView() {
        this.setState({
            view: !this.state.view,
        });
    }
    renderView() {
        const { view } = this.state;
        if (view === false) {
            return <Signup changeTitle={this.renderTitle()} />;
        } else if (view === true) {
            return <Login changeTitle={this.renderTitle()} />;
        }
    }

    render() {
        console.log(this.props.login);
        return (
            <div>
                <div>{this.renderView()}</div>
            </div>
        );
    }
}

export default Signupadmin;


