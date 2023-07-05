import Expenseitem from "./Expenseitem";
import './Expenses.css'
import '../Ui/Card.css'
function Expenses(props) {
    console.log(props.data)
    return (
        <div className="expenses">
         <Expenseitem
        title={props.data[0].title}
        amount={props.data[0].amount}
        date={props.data[0].date}
      ></Expenseitem>
      <Expenseitem
        title={props.data[1].title}
        amount={props.data[1].amount}
        date={props.data[1].date}
      ></Expenseitem>
      <Expenseitem
        title={props.data[2].title}
        amount={props.data[2].amount}
        date={props.data[2].date}
      ></Expenseitem>
      <Expenseitem
        title={props.data[3].title}
        amount={props.data[3].amount}
        date={props.data[3].date}
      ></Expenseitem>
        </div>
    )
}

export default Expenses