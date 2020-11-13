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



// import React from "react";
// import NoOrders from "./NoOrders";
// import ShowOrders from "./ShowOrders";

// export default function Finished(props){
//   const {orderList} = props;
//   return(
//     <div>
//       <h1>Placed Orders:</h1>
//       {orderList === [] ? 
//         <NoOrders /> : 
//         <ShowOrders orderList={orderList}/>
//       }
//     </div>
//   );
// }