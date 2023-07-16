import * as React from "react";
import "./Form.css";

const { useState } = React;

const Form = (props) => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [price, setPrice] = useState("");

  function handleInputChange(neededInput, value) {
    neededInput === "title"
      ? setTitle(value)
      : neededInput === "date"
      ? setDate(value)
      : setPrice(value);
  }

  function handleFormSubmitting(event) {
    event.preventDefault();

    if (title === "" || date === "" || price === "") return;

    const newExpenseObject = {
      title,
      price: +price,
      date: new Date(date),
    };

    props.onSubmitting(newExpenseObject);

    setTitle("");
    setDate("");
    setPrice("");

    props.onStopAdding();
  }

  return (
    <form className="form">
      <div>
        <label htmlFor="tit">Title: </label>
        <input
          type="text"
          id="tit"
          value={title}
          onChange={({ target }) => handleInputChange("title", target.value)}
        />
      </div>
      <div>
        <label htmlFor="dat">Date: </label>
        <input
          type="date"
          min="2020-01-01"
          max="2023-07-12"
          id="dat"
          value={date}
          onChange={({ target }) => handleInputChange("date", target.value)}
        />
      </div>
      <div>
        <label htmlFor="pri">Price: </label>
        <input
          type="number"
          min="0.01"
          step="0.01"
          id="pri"
          value={price}
          onChange={({ target }) => handleInputChange("price", target.value)}
        />
      </div>
      <button type="button" onClick={props.onStopAdding}>
        Cancel
      </button>
      <button type="submit" onClick={handleFormSubmitting}>
        Add New Expense
      </button>
    </form>
  );
};

export default Form;
