import React from "react";
import SearchResult from "./SearchResult.jsx"
import axios from "axios";
// dropdown component
class Dropdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            type: "",
            width: "",
            diameter: "",
            height: "",
            product: null

        };

    }








    render() {
        console.log(this.props.handelevent)
        console.log(this.props.search)
        return (
            <div className="dropdownbtn">
                <h1 id="seachtitle"> Search for your favorite tyre </h1>
                <select
                    name="type"
                    onChange={this.props.handelevent}
                    className="form-select"
                    aria-label="Default select example"
                >
                    <option defaultValue>Select Tyre Type (BRAND)</option>
                    <option>Amine</option>
                    <option>GoodYear</option>
                    <option>Bridgestone</option>
                </select>
                <select
                    name="width"
                    onChange={this.props.handelevent}
                    className="form-select"
                    aria-label="Default select example"
                >
                    <option defaultValue>Select Width</option>
                    <option>195</option>
                    <option>200</option>
                    <option>205</option>
                    <option>175</option>
                </select>
                <select
                    name="diameter"
                    onChange={this.props.handelevent}
                    className="form-select"
                    aria-label="Default select example"
                >
                    <option defaultValue>Select Diameter</option>
                    <option>55</option>
                    <option>60</option>
                    <option>58</option>
                    <option>75</option>
                </select>
                <select
                    name="height"
                    onChange={this.props.handelevent}
                    className="form-select"
                    aria-label="Default select example"
                >
                    <option defaultValue>Select Height</option>
                    <option>15</option>
                    <option>16</option>
                    <option>18</option>
                    <option>19</option>
                </select>

                <button
                    id="buttonsearch"
                    type="button"
                    onClick={this.props.search}
                    className="btn btn-dark"
                >
                    Search
        </button>
            </div>
        );
    }
}

export default Dropdown;