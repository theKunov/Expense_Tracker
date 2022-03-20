import React, { useState }  from 'react';

import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const Default_Expenses = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2022, 2, 14),
  },
  { id: 'e2', 
    title: 'New TV', 
    amount: 499.99, 
    date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 11, 28),
  },
  {
    id: 'e4',
    title: 'Bitcoin',
    amount: 1,
    date: new Date(2021, 1, 12),
  },
];


const App = () => {
  const [expenses, setExpenses] =useState(Default_Expenses);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...expenses] 
    });
  };

  return (
    <div>
      <NewExpense onAddExpense = {addExpenseHandler}/>
      <Expenses expenses = {expenses}/>

    </div>
  );
}

export default App;
