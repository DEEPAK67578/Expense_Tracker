import React,{useState} from 'react'

import './ExpenseForm.css'

const ExpenseForm = (props) => {
    const [enteredTitle,setEnteredTitle] = useState('')
    const [date,setDate] = useState('')
    const [enteredAmount,setEnteredAmount] = useState('')
    
    //  const [enteredInput,setEnteredInput]=useState({
    //     enteredTitle:'',
    //     enteredAmount:'',
    //     date:''
    //  })

    const titleChangeHandler = (event) => {
         setEnteredTitle(event.target.value)
        // setEnteredInput({
        //     enteredTitle:event.target.value,
        //     enteredAmount:'',
        //     date:''
        // })
        // setEnteredInput((prevState) => {
        //     return {...prevState, enteredTitle:event.target.value}
        // })
    }
    
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value)
        // setEnteredInput({...enteredInput,enteredAmount:event.target.value})
    }

    const dateHandler = (event) => {
        setDate(event.target.value)
        // setEnteredInput({...enteredInput,date:event.target.value})
    }


    const submitHandler = (event) => {
        event.preventDefault()
        const data = {title:enteredTitle,amount:+enteredAmount,date:new Date(date)}
        props.onSaveExpenseData(data)
        setEnteredAmount('')
        setEnteredTitle('')
        setDate('')
        cancel()
    }

    const [clicked,setClicked] = useState('false')
    let form

    function addExpense() {
        setClicked(true)
    }

    function cancel() {
        setClicked(false)
    }

    if(clicked === true) {
        form = <form onSubmit={submitHandler}>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>
                    Title
                </label>
                <input type='text' name='username' value={enteredTitle} onChange={titleChangeHandler}></input>
            </div>
            <div className='new-expense__control'>
                <label>
                    Amount
                </label>
                <input type='number' name='amount' min='1' step='1' value={enteredAmount} onChange={amountChangeHandler}></input>
            </div>
            <div className='new-expense__control'>
                <label>
                    Title
                </label>
                <input type='date' name='date' value={date} onChange={dateHandler}></input>
            </div>
        </div>
        <div className='new-expense__actions'>
            <button type='submit'>Add Expense</button>
            <button type='button' onClick={cancel}>Cancel</button>
        </div>
    </form>
    }

    return (
        <div>
             {clicked === true ? (form) : (<button onClick={addExpense}>Add Expense</button>)}
        </div>
    )
}

export default ExpenseForm
