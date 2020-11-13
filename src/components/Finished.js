import React from "react";
import Order from "./Order";

export default function Finished(props){
  const {orderList} = props;
  return(
    <div>
      <h1>Placed Orders:</h1>
      {
        orderList.map((order) => {
          return(
            <Order key={order.id} details={order} />
          )          
        })
      }
    </div>
  );
}
