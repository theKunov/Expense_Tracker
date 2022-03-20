import React, {useState} from "react";
import "./Expenses.css"
import Card from '../UI/Card';
import ExpensesFilter from "../ExpenseFilter/ExpenseFilter";
import ExpensesList from './ExpensesList';
import ExpensesChart from "./ExpensesChart";


const Expenses = (props) => {

    const [filteredYear, setFilteredYear] = useState('2022');

    const FilteredDate = (selectedYear) => {
        setFilteredYear(selectedYear);
    };
    const filteredExpenses = props.expenses.filter( expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    

    return (
        <li>

            <Card className="expenses">
                <ExpensesFilter selected={filteredYear} onfilteredDate={FilteredDate}/>
                <ExpensesChart expenses={filteredExpenses}/>
                <ExpensesList items={filteredExpenses}/>
            </Card>

        </li>
    )
}

export default Expenses;