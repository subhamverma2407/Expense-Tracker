import React from "react";
import styles from "./Amount.module.css";
import Context from "../../context/Context";
import { useContext } from "react";

const Amount = () => {
  const { state, numberFormatter } = useContext(Context);
  return (
    <div className={styles.amount}>
      <div className={styles.income}>
        <p className={styles.income__title}>Income</p>
        <div className={styles.income__amount}>
          <span className={styles.income__amount_value}>
            {numberFormatter(state.income)}
          </span>
        </div>
      </div>
      <div className={styles.expense}>
        <p className={styles.expense__title}>Expense</p>
        <div className={styles.expense__amount}>
          <span className={styles.expense__amount_value}>
            {numberFormatter(state.expense)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Amount;
