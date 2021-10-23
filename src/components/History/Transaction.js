import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import styles from "./History.module.css";

const Transaction = (props) => {
  return (
    <div
      className={`${styles.history__container} ${
        props.type === "income"
          ? styles.history__income
          : styles.history__expense
      }`}
    >
      <div className={styles.history__title}>{props.name}</div>
      <div className={styles.history__amount}>
        <span>{props.numberFormatter(props.amount)}</span>
        <button
          onClick={() => props.onDelete(props.id)}
          className={styles.history__button}
        >
          <CloseIcon fontSize="small" sx={{ color: "#ff5722" }} />
        </button>
      </div>
    </div>
  );
};

export default Transaction;
