import React,{useState} from 'react'

import './ExpenseForm.css'

const ExpenseForm = () => {
    const [enteredTitle,setEnteredTitle] = useState('')
    const titleChangeHandler = (event) => {
         setEnteredTitle(event.target.value)
    }
    const [enteredAmount,setEnteredAmount] = useState('')
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value)
    }

    const [date,setDate] = useState('')
    const dateHandler = (event) => {
        setDate(event.target.value)
    }

    const submit = (event) => {
        event.preventDefaut()
        const values = {title:enteredTitle,amount:enteredAmount,date:date}
        console.log(enteredAmount)
        console.log(enteredTitle)
        console.log(date)
    }

    return (
        <form>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>
                        Title
                    </label>
                    <input type='text' name='username' onChange={titleChangeHandler}></input>
                </div>
                <div className='new-expense__control'>
                    <label>
                        Amount
                    </label>
                    <input type='number' name='amount' min='1' step='1' onChange={amountChangeHandler}></input>
                </div>
                <div className='new-expense__control'>
                    <label>
                        Title
                    </label>
                    <input type='date' name='date' onChange={dateHandler}></input>
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit' onSubmit={submit}>Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm
