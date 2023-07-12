import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesFilter from "../NewExpense/ExpenseFilter";
import "./Expenses.css";
import "../Ui/Card.js";
import Card from "../Ui/Card.js";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [year, setYear] = useState(2020);
  // let filteredInfoText = "2019,2021 & 2022";

  // if (year === "2019") {
  //   filteredInfoText = "2020,2021 & 2022";
  // } else if (year === "2021") {
  //   filteredInfoText = "2019,2020 & 2022";
  // } else if (year === "2022") {
  //   filteredInfoText = "2019,2020 & 2021";
  // }

  const data = props.data.filter((val) => {
    if (val.date.getFullYear() == year) {
      return val;
    }
  });

  const SavedFilteredYear1 = (year1) => {
    setYear(year1);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={year}
        SavedFilteredYear={SavedFilteredYear1}
      ></ExpensesFilter>
      <ExpensesChart expenses={data}></ExpensesChart>
      <ExpensesList data={data}></ExpensesList>

      
    </Card>
  );
}

export default Expenses;
