// import React from "react";
import * as React from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const { useState } = React;

const App = () => {
  const [expenses, setExpenses] = useState([
    {
      id: "e1",
      title: "Macbook Air M1",
      price: 999,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", price: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      price: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      price: 450,
      date: new Date(2021, 5, 12),
    },
    {
      id: "e5",
      title: "New Chair",
      price: 1500,
      date: new Date(2023, 7, 1),
    },
    {
      id: "e6",
      title: "New Camera",
      price: 25,
      date: new Date(2023, 5, 3),
    },
    {
      id: "e7",
      title: "New Mouse",
      price: 52,
      date: new Date(2023, 6, 2),
    },
  ]);

  function addNewExpenseHandler(newExpenseObject) {
    const newExpenseObjectWithID = {
      id: `e${+expenses[expenses.length - 1].id.split("")[1] + 1}`,
      ...newExpenseObject,
    };

    setExpenses((prevState) => {
      return [newExpenseObjectWithID, ...prevState];
    });
  }

  return (
    <div>
      <NewExpense onSubmitting={addNewExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
