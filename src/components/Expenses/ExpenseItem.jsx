import * as React from "react";
import Container from "../Wrapper/Container";
import "./ExpenseItem.css";
import ExpenseItemDate from "./ExpenseItemDate";
import ExpenseItemDescription from "./ExpenseItemDescription";

const ExpenseItem = ({ expenseObject }) => {
  return (
    <Container className="expense-item">
      <ExpenseItemDate normalDate={expenseObject.date} />
      <ExpenseItemDescription
        title={expenseObject.title}
        price={expenseObject.price}
      />
    </Container>
  );
};

export default ExpenseItem;
