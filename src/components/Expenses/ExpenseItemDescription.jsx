import * as React from "react";
import "./ExpenseItemDescription.css";

const ExpenseItemDescription = (props) => {
  return (
    <div className="expense-item__description">
      <h2>{props.title}</h2>
      <div className="expense-item__price">{props.price}</div>
    </div>
  );
};

export default ExpenseItemDescription;
