
import React from 'react';


class Dropdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            type: '',
            width: '',
            diameter: '',
            height: '',
        }

    }

    handelevent(event) {
        console.log(event.target.name)
        console.log(event.target.value)
        this.setState({
            [event.target.name]: event.target.value
        })

    }

    handleClick(e) {
        e.preventDefault()

    }


    render() {
        console.log(this.state)
        return (

            <div className='dropdownbtn'>
                <h1 id='seachtitle'> Search for your favorite tyre  </h1>
                <select name='type' onChange={this.handelevent.bind(this)} className="form-select" aria-label="Default select example">
                    <option defaultValue>Select Tyre Type (BRAND)</option>
                    <option >Amine</option>
                    <option >GoodYear</option>
                    <option >Bridgestone</option>
                </select>
                <select name='width' onChange={this.handelevent.bind(this)} className="form-select" aria-label="Default select example">
                    <option defaultValue>Select Width</option>
                    <option >195</option>
                    <option >200</option>
                    <option >205</option>
                    <option >175</option>
                </select>
                <select name='diameter' onChange={this.handelevent.bind(this)} className="form-select" aria-label="Default select example">
                    <option defaultValue>Select Diameter</option>
                    <option >55</option>
                    <option >60</option>
                    <option >58</option>
                    <option >75</option>
                </select>
                <select name='height' onChange={this.handelevent.bind(this)} className="form-select" aria-label="Default select example">
                    <option defaultValue>Select Height</option>
                    <option >15</option>
                    <option >16</option>
                    <option >18</option>
                    <option >19</option>
                </select>

                <button id='buttonsearch' type="button" className="btn btn-dark">Search</button>
            </div>

        )
    }






}

export default Dropdown;