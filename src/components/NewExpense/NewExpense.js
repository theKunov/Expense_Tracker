import React, {useState} from 'react';
import './NewExpense.css';

import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {

    const [addExpense, setAddExpense] = useState(false);
    
    const addExpenseClick = () => {
        setAddExpense(true);
    };

    const onAddExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };

        console.log(expenseData);
        props.onAddExpense(expenseData);
        setAddExpense(false);
    };

    const stopAddExpense = () => {
        setAddExpense(false);
    };

    return (
        <div className='new-expense'>
            {!addExpense && <button onClick={addExpenseClick}>Add new expense</button>}
            {addExpense && <ExpenseForm  onAddExpenseData={onAddExpenseDataHandler} onCancel={stopAddExpense} />}
        </div>
    );

}

export default NewExpense