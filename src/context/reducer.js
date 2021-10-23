const reducer = (state, action) => {
  const addTransaction = () => {
    return state.transactions.concat(action.payload.transaction);
  };

  const deleteTransaction = (id) => {
    return state.transactions.filter((item) => item.transactionId !== id);
  };

  const getTotal = (transactions) => {
    return transactions.reduce((acc, item) => {
      if (item.transactionType === "income")
        return (acc += item.transactionAmount);
      else return (acc -= item.transactionAmount);
    }, 0);
  };

  const getIncome = (transactions) => {
    return transactions.reduce((acc, item) => {
      if (item.transactionType === "income")
        return acc + item.transactionAmount;
      else return acc;
    }, 0);
  };

  const getExpense = (transactions) => {
    return transactions.reduce((acc, item) => {
      if (item.transactionType === "expense")
        return acc + item.transactionAmount;
      else return acc;
    }, 0);
  };

  switch (action.type) {
    case "CREATE_TRANSACTION": {
      const transactions = addTransaction();
      return {
        ...state,
        transactions,
        total: Number(parseFloat(getTotal(transactions)).toFixed(2)),
        income: Number(parseFloat(getIncome(transactions)).toFixed(2)),
        expense: Number(parseFloat(getExpense(transactions)).toFixed(2)),
      };
    }
    case "TRANSACTION_DELETE": {
      const transactions = deleteTransaction(action.payload.id);

      return {
        ...state,
        transactions,
        total: Number(parseFloat(getTotal(transactions)).toFixed(2)),
        income: Number(parseFloat(getIncome(transactions)).toFixed(2)),
        expense: Number(parseFloat(getExpense(transactions)).toFixed(2)),
      };
    }
    case "SET_MENU": {
      return {
        ...state,
        selectedMenu: action.payload.menu,
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
