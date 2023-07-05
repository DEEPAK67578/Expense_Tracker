import React, { useState } from 'react';


import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
import Card from '../Ui/Card';

function Expenseitem(props) {
  const [title,setTitle] = useState(props.title)
  const clickHandlerConst = () => {
    setTitle('Updated')
  }
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandlerConst}>Change Title</button>
    </Card>
  );
}

export default Expenseitem;
