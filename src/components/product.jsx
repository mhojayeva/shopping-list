import React from "react";

   export default  function FruitItem (props) {
const { name, quantity } = props

    return (
     <div className="flex-container">
      <div className="item-container">
        <p> { props.name}  </p>
        <p> Quantity : { props.quantity} </p>
         <button className="add-button"> Add </button>
      </div>
     </div>
    );
}  
