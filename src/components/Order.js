import React from "react";

export default function Order(props){
  const {details} = props;
  return(
    <div className="order-container">
      <h3>{details.id}</h3>
      <p>Name: {details.first_name} {details.last_name}</p>
      <p>Pizza Size: {details.size}</p>
      <p>Toppings: {details.toppings}</p>
    </div>
  );
}