import React from "react";

export default fruitItem()




function fruitItem(props) {
    return (
    <div className="top-main">
      <h3> { props.name}  </h3>
      <h3> { props.quantity} </h3>

      <button> Add </button>
      </div>
    );
};