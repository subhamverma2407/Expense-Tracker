import React, { useContext } from "react";
import styles from "./Balance.module.css";
import Context from "../../context/Context";

const Balance = (props) => {
  const { state, numberFormatter } = useContext(Context);
  return (
    <div className={styles.balance}>
      <p className={styles.balance__title}>Your Balance</p>
      <div className={styles.balance__amount}>
        <h2 className={styles.balance__amount_value}>
          {numberFormatter(state.total)}
        </h2>
      </div>
    </div>
  );
};

export default Balance;
