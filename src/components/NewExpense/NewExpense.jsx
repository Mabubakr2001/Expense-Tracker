import * as React from "react";
import Container from "../Wrapper/Container";
import Form from "./Form";
import "./NewExpense.css";

const { useState } = React;

const NewExpense = ({ onSubmitting }) => {
  const [isAdding, setIsAdding] = useState(false);

  function startAddingNewExpense() {
    setIsAdding(true);
  }

  function stopAddingNewExpense() {
    setIsAdding(false);
  }

  return (
    <Container className="new-expense">
      {!isAdding && (
        <button onClick={startAddingNewExpense}>Add New Expense</button>
      )}
      {isAdding && (
        <Form onStopAdding={stopAddingNewExpense} onSubmitting={onSubmitting} />
      )}
    </Container>
  );
};

export default NewExpense;
