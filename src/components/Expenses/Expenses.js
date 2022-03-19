import React,{useState} from 'react';

import ExpenseFilter from '../Expensefilter/ExpenseFilter';
import Card from '../utility/Card/Card'
import ExpensesList from './ExpensesList/ExpensesList';
import './Expenses.css'

const  Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2022');
  const [filteredExpenses, setFilteredExpenses] = useState(props.data);

  const filterChangeHandler = selectedYear => {
     setFilteredYear(selectedYear);
     setFilteredExpenses(props.data.filter(expense => {
      return expense.date.getFullYear().toString() === selectedYear.toString()  }));
  };

    return (
      <div>
        <Card className="expenses">
        <ExpenseFilter  onChangeFilter={filterChangeHandler} />
        <ExpensesList items={filteredExpenses}></ExpensesList>
        </Card>
      </div>
    )
}

export default Expenses;