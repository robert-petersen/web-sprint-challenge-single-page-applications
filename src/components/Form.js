import React from "react";

export default function Form(props){
  const {newOrder, errors, disabled, formSubmit, formChange} = props;

  const onChange = (evt) => {
    const {name, value, checked, type} = evt.target;
    const correctValue = type === "checkbox" ? checked : value;
    formChange(name, correctValue);
  }

  const onSubmit = (evt) => {
    evt.preventDefault();
    formSubmit();
  }

  return(
    <form onSubmit={onSubmit}>
      <label>First Name:
        <input
          name='first_name'
          type='text'
          value={newOrder.first_name}
          onChange={onChange}
        />
      </label>

      <label>Last Name:
        <input
          name='last_name'
          type='text'
          value={newOrder.last_name}
          onChange={onChange}
        />
      </label>

      <label>Select Pizza Size:
        <select
          name="size"
          onChange={onChange}
          value={newOrder.size}
        >
          <option value="">---Select Size---</option>
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
        </select>
      </label>

      <div>Select Toppings:</div>

      <label>Pepperoni
          <input
            type="checkbox"
            name="pepperoni"
            checked={newOrder.pepperoni}
            onChange={onChange}
          ></input>
        </label>

      <label>Spinach
          <input
            type="checkbox"
            name="spinach"
            checked={newOrder.spinach}
            onChange={onChange}
          ></input>
        </label>

      <label>Sausage
          <input
            type="checkbox"
            name="sausage"
            checked={newOrder.sausage}
            onChange={onChange}
          ></input>
        </label>

      <label>Mushrooms
          <input
            type="checkbox"
            name="mushrooms"
            checked={newOrder.mushrooms}
            onChange={onChange}
          ></input>
        </label>

        <div className="submit-container">
          <div className='errors'>
            <div>{errors.first_name}</div>
            <div>{errors.last_name}</div>
            <div>{errors.size}</div>
          </div>
          <button id="submitButton" disabled={disabled}>Submit!</button>
        </div>
    </form>
  )
}