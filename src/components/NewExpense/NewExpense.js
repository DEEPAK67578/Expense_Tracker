import React from "react"
import ExpenseForm from "./ExpenseForm"
import './NewExpense.css'
const NewExpense = (props) => {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const copiedExpenseData = {
            ...enteredExpenseData,
            id:Math.random().toString()
        }
        props.saveChange(copiedExpenseData)
        console.log(copiedExpenseData)

    }
    return (
        <div className="new-expense"> 
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}></ExpenseForm>
        </div>
    )
}

export default NewExpense