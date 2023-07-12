import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import React,{useState} from "react";

const expenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [expenseData,setExpenseData] =  useState(expenses)

  function saver(expense) {
    let DataEntered = {
      ...expense
    }
    expenses.push(DataEntered)
    setExpenseData((prevState)=> {
        return [expense,...prevState]
    })
  }
  return (
    <div>
      <NewExpense saveChange = {saver}></NewExpense>
      <Expenses data={expenseData}></Expenses>
    </div>
  );
}

export default App;

