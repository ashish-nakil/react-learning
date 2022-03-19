import FormattedDate from '../utility/FormattedDate/FormattedDate'
import Card from '../utility/Card/Card'
import react, {useState} from 'react';

import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  
  const [title, setTitle] = useState(props.title);

  const clickHandler = () =>{
    setTitle('Updated');
  };


  return (
    <Card className="expense-item">
     <FormattedDate date={props.date}> </FormattedDate>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price"> &#x20b9;{props.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
