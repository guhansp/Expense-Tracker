import "./ExpenseItem.css";
import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props) {
  
  
  const [title,SetTitle] = useState(props.title);

  const clickHandler = () => {
    SetTitle("Updated!");
    console.log(title);
  };
  return (
    <Card className="expense-item">
      <ExpenseDate
        title={title}
        amount={props.amount}
        date={props.date}
      ></ExpenseDate>

      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}> Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
