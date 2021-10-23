import React from "react";
import styles from "./Transaction.module.css";
import { useState, useContext } from "react";
import Context from "../../context/Context";
import { incomeCategory, expenseCategory } from "../../utils/Category";
import { v4 as uuidv4 } from "uuid";

const Transaction = (props) => {
  const [amount, setAmount] = useState("");
  const [transactionType, setTransactionType] = useState(null);
  const [selectedOption, setSelectedOption] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const optionList =
    transactionType === "Income"
      ? incomeCategory.map((item) => item.label)
      : expenseCategory.map((item) => item.label);

  const { state, dispatch } = useContext(Context);

  const createTransaction = () => {
    const transaction = {
      transactionId: uuidv4(),
      transactionType: transactionType.toLowerCase(),
      transactionCategory: selectedOption,
      transactionAmount: Number(parseFloat(amount).toFixed(2)),
    };
    dispatch({
      type: "CREATE_TRANSACTION",
      payload: { transaction },
    });
    setAmount("");
    setTransactionType(null);
    setSelectedOption("");
    setErrorMessage(null);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (
      amount !== "" &&
      parseInt(amount) !== 0 &&
      !isNaN(amount) &&
      transactionType !== null &&
      selectedOption !== ""
    ) {
      if (
        transactionType === "Expense" &&
        state.total < Number(parseFloat(amount).toFixed(2))
      )
        setErrorMessage("Not Enough Balance!");
      else createTransaction();
    } else setErrorMessage("Fill Data Correctly!");
  };

  const Button = () => {
    if (transactionType) {
      return transactionType === "Income" ? (
        <button className={styles.transaction__income} onClick={onSubmit}>
          ADD INCOME
        </button>
      ) : (
        <button className={styles.transaction__expense} onClick={onSubmit}>
          ADD EXPENSE
        </button>
      );
    }
    return null;
  };

  const onAmountFocus = (e) => {
    setErrorMessage(null);
  };

  const transactionTypeHandler = (e) => {
    setTransactionType(e.target.value);
    setSelectedOption("");
    setErrorMessage(null);
  };

  const categoryHandler = (e) => {
    setSelectedOption(e.target.value);
    setErrorMessage(null);
  };

  return (
    <div className={styles.container}>
      <form className={styles.transaction__form}>
        <input
          placeholder="AMOUNT"
          className={styles.transaction__input}
          onChange={(e) => setAmount(e.target.value)}
          onFocus={onAmountFocus}
          value={amount}
        ></input>
        <p className={styles.transaction__type}>
          <label>
            <input
              onChange={(e) => transactionTypeHandler(e)}
              checked={transactionType === "Income"}
              type="radio"
              value="Income"
              name="type"
            />
            <span>INCOME</span>
          </label>
          <label>
            <input
              onChange={transactionTypeHandler}
              checked={transactionType === "Expense"}
              type="radio"
              value="Expense"
              name="type"
            />
            <span>EXPENSE</span>
          </label>
        </p>

        <select
          className={styles.transaction__category}
          onChange={categoryHandler}
          value={selectedOption}
        >
          <option className={styles.transaction__category_option} value="">
            Select Option
          </option>
          {optionList.map((item, key) => (
            <option
              className={styles.transaction__category_option}
              key={key}
              value={item}
            >
              {item}
            </option>
          ))}
        </select>
        <Button />
        {errorMessage !== null && (
          <div className={styles.errorMessage}>{errorMessage}</div>
        )}
      </form>
    </div>
  );
};

export default Transaction;
