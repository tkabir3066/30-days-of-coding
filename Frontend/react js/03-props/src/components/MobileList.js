import React from "react";
import "./MobileList.css";
function MobileList({ image, title, price }) {
  return (
    <div className="main">
      <img className="image" src={image} alt="mobile" />

      <div>
        <h2>{title}</h2>
        <p>${price}</p>
        <button>Add to Cart</button>
      </div>
    </div>
  );
}

export default MobileList;
