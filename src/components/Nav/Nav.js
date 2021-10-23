import React from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import HistoryIcon from "@mui/icons-material/History";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import styles from "./Nav.module.css";
import { useState, useContext } from "react";
import Context from "../../context/Context";

const Nav = () => {
  const { dispatch } = useContext(Context);
  const defaultStyle = {
    addStyle: {
      color: "#51587d",
      transition: "250ms ease-in-out",
    },
    historyStyle: {
      color: "#4b9ef3;",
      transition: "250ms ease-in-out",
    },
    chartStyle: {
      color: "#51587d",
      transition: "250ms ease-in-out",
    },
  };

  const [style, setStyle] = useState(defaultStyle);
  const [navText, setNavText] = useState("History");
  const onAddHandler = (e) => {
    setNavText("Add Transaction");
    setStyle({
      ...defaultStyle,
      historyStyle: {
        ...defaultStyle.historyStyle,
        color: "#51587d",
      },
      addStyle: {
        ...defaultStyle.addStyle,
        color: "#28A745",
      },
    });
    dispatch({
      type: "SET_MENU",
      payload: { menu: "add_transaction" },
    });
  };

  const onHistoryHandler = (e) => {
    setNavText("History");
    setStyle({
      ...defaultStyle,
      historyStyle: {
        ...defaultStyle.historyStyle,
        color: "#4b9ef3",
      },
    });
    dispatch({
      type: "SET_MENU",
      payload: { menu: "history" },
    });
  };

  const onChartHandler = (e) => {
    setNavText("Chart");
    setStyle({
      ...defaultStyle,
      historyStyle: {
        ...defaultStyle.historyStyle,
        color: "#51587d",
      },
      chartStyle: {
        ...defaultStyle.chartStyle,
        color: "#FFC107",
      },
    });
    dispatch({
      type: "SET_MENU",
      payload: { menu: "chart" },
    });
  };
  return (
    <div className={styles.nav}>
      <p className={styles.nav__header}>{navText}</p>
      <button onClick={onAddHandler} className={styles.nav__icon}>
        <AddCircleIcon sx={style.addStyle} />
      </button>
      <button onClick={onHistoryHandler} className={styles.nav__icon}>
        <HistoryIcon sx={style.historyStyle} />
      </button>
      <button onClick={onChartHandler} className={styles.nav__icon}>
        <ShowChartIcon sx={style.chartStyle} />
      </button>
    </div>
  );
};

export default Nav;
