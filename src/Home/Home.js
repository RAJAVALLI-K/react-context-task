import React from "react";
import { stateContext } from "../Context/Context";
import { useContext } from "react";
import './Home.css';

const Home = () => {

  const {state,dispatch}=useContext(stateContext);
  console.log(state.name,state.tasks);

  let updatedTasks=state.tasks;
  console.log(updatedTasks);

  return (
    <div>
      {updatedTasks?.map((e, i) => {
        return (
          <div key={i}>
            <div>
              <h1>PRODUCT DETAILS</h1>
              <h4>Product Name:{e.name}</h4>
              <h4>Product Price:{e.price}</h4>
              <h4>Product Weight:{e.weight}</h4>
              <h4>Product Item:{e.item}</h4>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
