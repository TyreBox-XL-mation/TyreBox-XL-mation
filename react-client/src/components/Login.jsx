import React from 'react';



export default class Login extends React.Component {
    constructor(props) {
        super(props)

    }



    render() {
        console.log(this.props.loggedin);
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
                            />
                        </div>
                    </div>
                </div>
                <div className="log-footer">
                    <button onClick={this.props.loggedin} type="button" className="log-btn">
                        Login
            </button>
                </div>
                <div className="title-switcher-container">{this.props.changeTitle}</div>
            </div>
        );
    }
}