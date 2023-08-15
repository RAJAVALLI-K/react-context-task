import React, { useReducer } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Form from "./Form/Form";
import Home from "./Home/Home";
import { stateContext } from "./Context/Context";
import { stateReducer, initialState } from "./Context/stateReducer"; 

const Router = () => {
  const [state, dispatch] = useReducer(stateReducer, initialState);
  return (
    <stateContext.Provider value={{ state,dispatch }}>
      <BrowserRouter>
        <Routes>
          <Route path= "/" element={<Form />} />
          <Route path="/Home" element={<Home />} />
          <Route path="*" element={<Form />} />
        </Routes>
      </BrowserRouter>
    </stateContext.Provider>
  );
};

export default Router;
