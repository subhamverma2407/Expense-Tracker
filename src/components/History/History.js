import React from "react";
import Context from "../../context/Context";
import { useContext } from "react";
import styles from "./History.module.css";
import Transaction from "./Transaction";
import firstTransaction from "../../assets/firstTransaction.svg";

const History = () => {
  const { state, dispatch, numberFormatter } = useContext(Context);

  const onDelete = (id) => {
    dispatch({
      type: "TRANSACTION_DELETE",
      payload: { id },
    });
  };

  const Element = () => {
    return (
      <div className={styles.no__transaction}>
        <img alt="" src={firstTransaction} />
        <span> Add Your First Transaction</span>
      </div>
    );
  };

  return (
    <div className={styles.container}>
      {state.transactions.length === 0 ? <Element /> : null}
      {state.transactions.map((item) => {
        if (item.transactionType === "income")
          return (
            <Transaction
              amount={item.transactionAmount}
              name={item.transactionCategory}
              key={item.transactionId}
              type={item.transactionType}
              id={item.transactionId}
              onDelete={onDelete}
              numberFormatter={numberFormatter}
            />
          );
        else {
          return (
            <Transaction
              amount={item.transactionAmount}
              name={item.transactionCategory}
              key={item.transactionId}
              type={item.transactionType}
              id={item.transactionId}
              onDelete={onDelete}
              numberFormatter={numberFormatter}
            />
          );
        }
      })}
    </div>
  );
};

export default History;
