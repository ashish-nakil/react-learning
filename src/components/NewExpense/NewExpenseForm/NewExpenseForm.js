import React, { useState } from 'react';

import './NewExpenseForm.css';

const NewExpenseForm = (props) => {

  // Approch A
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredDate, setEnteredDate] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');

  const TitleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const AmountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const DateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };
  
  // Approch B
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredDate: '',
  //   enteredAmount: '',
  // });
  // const TitleChangeHandler = (event) => {
  //   // setUserInput({
  //   //   ...userInput,
  //   //   enteredTitle: event.target.value
  //   // });

  //   setUserInput((prevState) => {
  //     return{ ...prevState, enteredTitle: event.target.value };
  //   });
  // };

  // const AmountChangeHandler = (event) => {
  //   // setUserInput({
  //   //   ...userInput,
  //   //   enteredAmount: event.target.value,
  //   // });
    
  //   setUserInput((prevState) => {
  //     return{ ...prevState, enteredAmount: event.target.value };
  //   });
  // };

  // const DateChangeHandler = (event) => {
  //   // setUserInput({
  //   //   ...userInput,
  //   //   enteredDate: event.target.value,
  //   // });
   
  //   setUserInput((prevState) => {
  //     return{ ...prevState, enteredDate: event.target.value };
  //   });
  // };

  const submitHandler = (event) =>
  {
      event.preventDefault();

      const expenseData = {
        title   : enteredTitle,
        amount  : enteredAmount,
        date : new Date(enteredDate)
      };
      
      props.onNewExpenseSave(expenseData);
      
      clearForm();
  };

  const clearForm = () => {
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  }

  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type='text'  value={enteredTitle} onChange={TitleChangeHandler}/>
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input type='number' value={enteredAmount} min='0' step='10' onChange={AmountChangeHandler}/>
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input type='date' value={enteredDate}  min='2019-01-01' max='2022-12-31' onChange={DateChangeHandler}/>
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};

export default NewExpenseForm;