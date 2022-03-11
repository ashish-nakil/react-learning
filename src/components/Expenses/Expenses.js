import React,{useState} from 'react';

import ExpenseFilter from '../Expensefilter/ExpenseFilter';
import ExpenseItem from '../ExpenseItem/ExpenseItem'
import Card from '../utility/Card/Card'

import './Expenses.css'

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
     setFilteredYear(selectedYear);
  };

 console.log(props.data.length);
 
const result = props.data.filter(function(value){ return value.date.getFullYear()==filteredYear});

 if(result.length > 0)
  {
    return(
      <div>
        <Card className="expenses">
        <ExpenseFilter  onChangeFilter={filterChangeHandler} />
          {
            props.data.map((data) =>(
              <ExpenseItem
                key={data.key}
                title={data.title}
                amount={data.amount}
                date={data.date}
              />
          ))}
        </Card>
        </div>
    )
  }
  else
  {
    return(
      <div>
        <Card className="expenses">
          <ExpenseFilter onChangeFilter={filterChangeHandler} ></ExpenseFilter>
           <div className='no-record-text'> No record found</div>
        </Card>
      </div>
    );
  }
}

export default Expenses;