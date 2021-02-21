import React from "react";
import Home from "./components/Home.jsx";
import Ourbrands from "./components/Ourbrands.jsx";
import Contactus from "./components/Contactus.jsx";
import Admin from "./components/Admin.jsx";
import SearchResult from "./components/SearchResult.jsx"
import axios from 'axios'
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: "home",
      type: "",
      width: "",
      diameter: "",
      height: "",
      product: null

    };
    this.changeView = this.changeView.bind(this);
    this.handelevent = this.handelevent.bind(this)

  }


  handelevent(event) {
    console.log(event.target.name);
    console.log(event.target.value);
    this.setState({
      [event.target.name]: event.target.value,
    });
  }


  handleClick(e, option) {
    e.preventDefault();
    axios
      .get("/tyrebox/")
      .then((tyres) => {
        console.log(tyres.data)
        var filtred = tyres.data.filter(element => {

          return ((element.type === this.state.type))


        })
        this.setState({
          product: filtred,
          view: option,
        })


      })
      .catch((err) => {
        console.log(err);
      });


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
      return <Home handelevent={(event) => this.handelevent(event)} search={(e) => this.handleClick(e, 'searchresult')} />;
    } else if (view === "ourbrands") {
      return <Ourbrands />;
    } else if (view === "contactus") {
      return <Contactus />;
    } else {
      return <SearchResult product={this.state.product} />
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




