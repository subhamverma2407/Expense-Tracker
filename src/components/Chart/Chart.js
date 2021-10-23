import React from "react";
import Context from "../../context/Context";
import { useContext } from "react";
import { incomeCategory, expenseCategory } from "../../utils/Category";
import styles from "./Chart.module.css";
import { Doughnut } from "react-chartjs-2";
import noIncome from "../../assets/noIncome.svg";
import noExpense from "../../assets/noExpense.svg";

const Chart = () => {
  const { state } = useContext(Context);

  const getData = (type) => {
    const labels = [
      ...new Set(
        state.transactions
          .filter((item) => item.transactionType === type)
          .map((item) => item.transactionCategory)
      ),
    ];

    let data = [];
    labels.forEach((item) => {
      let sum = 0;
      state.transactions.forEach((key) => {
        if (key.transactionCategory === item) {
          sum += key.transactionAmount;
        }
      });
      data.push(sum);
    });

    let background = [];

    const category = type === "income" ? incomeCategory : expenseCategory;
    labels.forEach((item) => {
      category.forEach((key) => {
        if (key.label === item) background.push(key.color);
      });
    });

    return {
      labels,
      data,
      background,
    };
  };

  const incomeData = getData("income");
  const expenseData = getData("expense");

  const data_income = {
    labels: incomeData.labels,
    datasets: [
      {
        label: "Income Chart",
        data: incomeData.data,
        backgroundColor: incomeData.background,
        hoverOffset: 4,
      },
    ],
  };

  const data_expense = {
    labels: expenseData.labels,
    datasets: [
      {
        label: "Income Chart",
        data: expenseData.data,
        backgroundColor: expenseData.background,
        hoverOffset: 4,
      },
    ],
  };

  const IncomeFailover = () => {
    return (
      <div className={styles.no__income}>
        <img alt="" src={noIncome} />
        <span> No Income</span>
      </div>
    );
  };

  const ExpenseFailover = () => {
    return (
      <div className={styles.no__expense}>
        <img alt="" src={noExpense} />
        <span> No Expense</span>
      </div>
    );
  };

  return (
    <div className={styles.chart__container}>
      <div className={styles.income__chart}>
        <span>INCOME CHART</span>
        {data_income.labels.length !== 0 ? (
          <Doughnut data={data_income}></Doughnut>
        ) : (
          <IncomeFailover />
        )}
      </div>
      <div className={styles.expense__chart}>
        <span>EXPENSE CHART</span>
        {data_expense.labels.length !== 0 ? (
          <Doughnut data={data_expense}></Doughnut>
        ) : (
          <ExpenseFailover />
        )}
      </div>
    </div>
  );
};

export default Chart;
