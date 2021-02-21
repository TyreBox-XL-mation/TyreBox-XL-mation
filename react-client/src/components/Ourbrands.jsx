import React from "react";

class Ourbrands extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="brands-main">
                <div className="brands-card">
                    <img
                        src="https://i.ibb.co/Qdrqs2d/firstlogo.png"
                        alt="Avatar"
                        className="brands-img"
                    />
                    <div className="brands-container">
                        <h4>
                            <b>Amine</b>
                        </h4>
                        <p>
                            This Tunisian tire industry company was created on July 21, 1980.
                            STIP manufactures and the markets tires and is the only tire
                            manufacturer in Tunisia. The company has two production units: a
                            factory in M'saken and a factory in Menzel Bourguiba The
                            production capacity is about 650,000 tires per year or 15,100
                            tons, expandable to 1 million tires per year.
            </p>
                    </div>
                </div>
                <div className="brands-card">
                    <img
                        src="https://www.paralympic.org/sites/default/files/images/181017145313063_Bridgestone-logo-for-stories.jpg"
                        alt="Avatar"
                        className="brands-img"
                    />
                    <div className="brands-container">
                        <h4>
                            <b>Bridgestone</b>
                        </h4>
                        <p>
                            The Bridgestone Group is eternally committed to serving society
                            with superior quality. The group will fulfill our responsibilities
                            decisively. As you reach for the future, the Group will remain by
                            your side.
            </p>
                    </div>
                </div>
                <div className="brands-card">
                    <img
                        src="https://mma.prnewswire.com/media/829998/Goodyear_Logo.jpg?p=publish"
                        alt="Avatar"
                        className="brands-img"
                    />
                    <div className="brands-container">
                        <h4>
                            <b>GoodYear</b>
                        </h4>
                        <p>
                            The Goodyear Tire & Rubber Company is an American multinational
                            tire manufacturing company founded in 1898 by Frank Seiberling and
                            based in Akron, Ohio. ... The company was named after American
                            Charles Goodyear, inventor of vulcanized rubber.
            </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Ourbrands;