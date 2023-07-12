import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css'


const ExpensesList = props => {

   if(props.data.length === 0 ) {
       return <h2 className="expenses-list__fallback">Found No Expenses</h2>
   }

        return (<ul className="expenses-list">
        {props.data.map((val) => {
          return (
            <ExpenseItem
              key={val.id}
              title={val.title}
              date={val.date}
              amount={val.amount}
            ></ExpenseItem>
        )})}
        </ul>)
}
export default ExpensesList