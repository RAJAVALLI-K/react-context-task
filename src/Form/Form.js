import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { stateContext } from "../Context/Context";

var arr = [];
const Form = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useContext(stateContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    let obj = {
      name: e.target.name.value,
      price: e.target.price.value,
      weight: e.target.weight.value,
      item: e.target.item.value,
    };
    arr.push(obj);

    let aa = "Rajavalli"
    dispatch({ type: "UpdateName", payload: aa });
    dispatch({ type: "UpdateTasks", payload: arr });
  };

  let goNextPage = () => {
    navigate(`/Home`);
  }

  return (
    <div>
      {state?.name}
      <h1>Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Product Name:</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your Product Name"
          ></input>
        </div>
        <div>
          <label>Price:</label>
          <input
            type="text"
            name="price"
            placeholder="Enter your Price"
          ></input>
        </div>
        <div>
          <label>Product Weight:</label>
          <input
            type="text"
            name="weight"
            placeholder="Enter your Product Weight"
          ></input>
        </div>
        <div>
          <label>Details of Item:</label>
          <input
            type="text"
            name="item"
            placeholder="Enter your Details of Item"
          ></input>
        </div>
        <div>
          <input type="submit" value="submit" />
        </div>
      </form>
      <button onClick={goNextPage}>Go To List</button>
    </div>
  );
};

export default Form;
