import React from "react";
import Login from "./components/Login.jsx";
import Signup from "./components/SignUp.jsx";
import Admin from "./components/Admin.jsx";

class Signupadmin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            view: true,
            views: false
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
    changeView(option) {
        this.setState({
            view: option,
            views: false
        });
    }

    renderView() {
        const { view } = this.state;
        const { views } = this.state
        if (view === false) {
            return <Signup changeTitle={this.renderTitle()} />;
        } else if (view === true) {
            return <Login loggedin={() => this.changeView('loggedin')} changeTitle={this.renderTitle()} />;
        } else if (view === 'loggedin') {
            return <Admin />
        }
    }

    render() {

        return (
            <div>
                <div>{this.renderView()}</div>
            </div>
        );
    }
}

export default Signupadmin;


