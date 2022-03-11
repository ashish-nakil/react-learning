import React from 'react';
import NewExpenseForm from './NewExpenseForm/NewExpenseForm';

import './NewExpense.css';

const NewExpense = (props) => {

  const SaveExpenseHandler = (data) => {
    props.onNewExpenseSave(data);
  }
  
  return (
    <div className='new-expense'>
      <NewExpenseForm onNewExpenseSave = {SaveExpenseHandler} />
    </div>
  );
};

export default NewExpense;