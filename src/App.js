import React, { useState } from 'react';
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const [expenses, setExpenses] = useState([]);
  // const expenses = [
  //   { id:Math.random(), title: "Test 1", amount: 100, date: new Date(2021, 2, 11) },
  //   { id:Math.random(), title: "Test 2", amount: 200, date: new Date(2022, 2, 12) },
  //   { id:Math.random(), title: "Test 3", amount: 300, date: new Date(2022, 2, 13) },
  // ];

  const SaveExpenseHandler = (data) => {
    setExpenses(
      {
        ...expenses,
        data
      });
      console.log(data);
  }

  return (
    <div>
      <NewExpense onNewExpenseSave={SaveExpenseHandler}></NewExpense>
      <Expenses data = {expenses}/>
    </div>
  );
}

export default App;
