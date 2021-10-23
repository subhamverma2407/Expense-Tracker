import React from "react";
import Context from "./Context";
import reducer from "./reducer";
import { useReducer, useEffect } from "react";

const AppState = (props) => {
  const fetch = JSON.parse(localStorage.getItem("state"));
  const localData = fetch ? fetch : null;

  const initialState = {
    total: localData ? localData.total : 0,
    income: localData ? localData.income : 0,
    expense: localData ? localData.expense : 0,
    transactions: localData ? localData.transactions : [],
    selectedMenu: "history",
  };

  const numberFormatter = (number) =>
    number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.setItem("state", JSON.stringify(state));
  }, [state]);

  return (
    <Context.Provider
      value={{
        state,
        dispatch,
        numberFormatter,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default AppState;
