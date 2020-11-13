import React, {useState, useEffect} from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import * as Yup from "yup";
import Home from "./components/Home";
import schema from "./validation/formschema";
import Form from "./components/Form";
import Finished from "./components/Finished";

const emptyOrder = {
  first_name: "",
  last_name: "",
  size: "",
  pepperoni: false,
  spinach: false,
  sausage: false,
  mushrooms: false,
}

const emptyErrors = {
  first_name: "",
  last_name: "",
  size: "",
}


const App = () => {
  const [newOrder, setNewOrder] = useState(emptyOrder);
  const [orderList, setOrderList] = useState([]);
  const [errors, setErrors] = useState(emptyErrors);
  const [disabled, setDisabled] = useState(true);

  const formChange = (name, value) => {
    Yup.reach(schema, name)
      .validate(value)
      .then(()=>{
        setErrors({
          ...errors,
          [name]: ""
        })
      })
      .catch((err)=>{
        setErrors({
          ...errors,
          [name]: err.errors[0]
        })
      });
    setNewOrder({
      ...newOrder,
      [name]: value
    });
  }

  const formSubmit = () => {
    const newOrderSubmit = {
      first_name: newOrder.first_name.trim(),
      last_name: newOrder.last_name.trim(),
      size: newOrder.size,
      pepperoni: newOrder.pepperoni,
      spinach: newOrder.spinach,
      sausage: newOrder.sausage,
      mushrooms: newOrder.mushrooms,
    }
    setOrderList([
      newOrderSubmit,
      ...orderList
    ]);
  }

  useEffect(() => {
    schema.isValid(newOrder).then((valid)=> {
      setDisabled(!valid);
    });
  }, [newOrder]);


  return (
    <BrowserRouter>
      <nav>
        <div className="nav-name">Lambda Eats</div>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/order">Order</Link>
          <Link to="/placed-orders">Placed Orders</Link>
        </div>
      </nav>
      <Switch>
        <Route path={"/order"}>
          <Form  
            newOrder={newOrder}
            errors={errors}
            disabled={disabled}
            formChange={formChange}
            formSubmit={formSubmit}
          />
        </Route>

        <Route path={"/placed-orders"}>
          <Finished  orderList={orderList}/>
        </Route>

        <Route path={"/"}>
          <Home />
        </Route>

      </Switch>
    </BrowserRouter>
  );
};
export default App;
