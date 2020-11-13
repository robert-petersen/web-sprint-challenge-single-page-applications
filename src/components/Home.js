import React from "react";
import { useHistory } from "react-router-dom";

export default function Home(){
  const history = useHistory();
  const goOrder = () => {
    history.push("/order");
  }
  return(
    <header>
        <h1>Lambda Eats :)</h1>
        <p>Today is National Pizza Day!</p>
        <p className="small-text">Not really but you want pizza right...</p>
        <button onClick={goOrder}>Order A Pizza!</button>
    </header>
  );
}