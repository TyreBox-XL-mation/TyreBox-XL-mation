import React from "react";
import Home from "./components/Home.jsx";
import Ourbrands from "./components/Ourbrands.jsx";

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
            <img id="logo" src="logo/logo.png"></img>
          </div>
          {/* <nav>
            <ul className="nav__links">
              <li>
                <a href="#">Our brands</a>
              </li>
              <li>
                <a href="#">our</a>
              </li>
            </ul>
          </nav> */}
          <div className="together">
            <a className="cta" href="#">
              <button>CONTACT US</button>
            </a>

            <a className="cta" href="#">
              <button id="leftbutton">OUR BRANDS</button>
            </a>
          </div>
        </header>
        <div className="main">{this.renderView()}</div>
      </div>
    );
  }
}

export default App;
