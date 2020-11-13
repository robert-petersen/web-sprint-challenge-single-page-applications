import React from "react";

export default function Order(props){
  const {details} = props;
  return(
    <div className="order-container">
      <h3>{details.id}</h3>
      <p>Name: {details.first_name} {details.last_name}</p>
      <p>Pizza Size: {details.size}</p>
      <p>Toppings: <br/>  
        pepperoni: {details.pepperoni} <br/> 
        spinach: {details.spinach}<br/> 
        sausage: {details.sausage}<br/> 
        mushrooms: {details.mushrooms}
      </p>
    </div>
  );
}