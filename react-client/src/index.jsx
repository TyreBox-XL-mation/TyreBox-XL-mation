import React from "react";
import Home from "./components/Home.jsx";
import Ourbrands from "./components/Ourbrands.jsx";
import Contactus from "./components/Contactus.jsx";
import axios from 'axios'
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
    } else {
      return <Contactus />;
    }

  }

  render() {
    return (

      <div>
        <header className="box">
          <div className="boximg">
            <img onClick={() => this.changeView("home")} id="logo" src="logo/logo.png"></img>
          </div>
          <div className="together">
            <a className="cta" href="#">
              <button onClick={() => this.changeView("contactus")} >CONTACT US</button>
            </a>

            <a className="cta" href="#">
              <button id="leftbutton" onClick={() => this.changeView("ourbrands")}>OUR BRANDS</button>
            </a>
            <a className="cta" href="#">
              <button onClick={() => this.changeView("home")} id="homebutton">HOME</button>
            </a>
          </div>

        </header>
        <div className="main">{this.renderView()}</div>
      </div>


    );
  }

}

export default App;




