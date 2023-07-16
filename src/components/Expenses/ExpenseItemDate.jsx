import * as React from "react";
import Container from "../Wrapper/Container";
import "./ExpenseItemDate.css";

const ExpenseItemDate = (props) => {
  const year = props.normalDate.getFullYear();
  const month = props.normalDate.toLocaleString("en-US", { month: "long" });
  const day = props.normalDate.getDate();

  return (
    <Container className="expense-item__date">
      <span>{month}</span>
      <span className="expense-date__year">{year}</span>
      <span className="expense-date__day">{day}</span>
    </Container>
  );
};

export default ExpenseItemDate;
