import FormattedDate from '../utility/FormattedDate/FormattedDate'
import Card from '../utility/Card/Card'

import "./ExpenseItem.css";

function ExpenseItem(props) {
  
  return (
    <Card className="expense-item">
     <FormattedDate date={props.date}> </FormattedDate>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
