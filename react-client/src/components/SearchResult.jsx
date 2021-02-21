import React from "react";
function SearchResult(props) {
  return (
    <div>
      <h1 id="lptitle">here your search</h1>
      <div  id="latest-product-card-container">
     
        { props.product.map((tyre, index) => (
            <div key={index} className="latest-product-card">
              <img
                src="https://autoservicekole.nl/wp-content/uploads/2017/09/wheel-2373040_1920.jpg"
                id="latest-product-img"
              />
              <div className="latest-product-container">
                <h3>
                  <b>{tyre.type}</b>
                </h3>
                <h2>
                  <b>{tyre.width}</b>
                  <b>{tyre.diameter}</b>
                  <b>{tyre.height}</b>
                </h2>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default SearchResult;
