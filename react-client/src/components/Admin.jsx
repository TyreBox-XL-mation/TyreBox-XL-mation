import React from 'react'
import AddService from "./AddService.jsx";
import AddProduct from "./Addproduct.jsx";
import PreAdmin from "./PreAdmin.jsx";


class Admin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            log: "preAdmin",
        };

        this.changeView = this.changeView.bind(this);
    }

    changeView(option) {
        this.setState({
            log: option,
        });
    }

    render() {
        console.log(this.props.login)
        return (
            <div>
                <header className="box">
                    <div className="boximg">
                        <img
                            onClick={() => this.changeView("home")}
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
                            <button onClick={() => this.changeView("home")} id="homebutton">
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