import * as React from "react";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = ({ filteredExpenses }) => {
  if (filteredExpenses.length === 0)
    return <p className="no-expenses__hint">No expenses to show!</p>;

  return (
    filteredExpenses.length > 0 &&
    filteredExpenses.map((expense) => {
      return <ExpenseItem key={expense.id} expenseObject={expense} />;
    })
  );
};

export default ExpensesList;
