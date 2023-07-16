import * as React from "react";
import ExpensesChart from "./ExpencesChart";
import Container from "../Wrapper/Container";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

const { useState } = React;

const Expenses = ({ expenses }) => {
  const [neededYear, setNeededYear] = useState("2021");

  function handleFilteringYearChanging(choosenYear) {
    setNeededYear(choosenYear);
  }

  const filteredExpenses = expenses.filter(
    (expense) => expense.date.getFullYear().toString() === neededYear
  );

  return (
    <Container className="expenses">
      <ExpensesFilter
        neededYear={neededYear}
        onFiltering={handleFilteringYearChanging}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList filteredExpenses={filteredExpenses} />
    </Container>
  );
};

export default Expenses;
