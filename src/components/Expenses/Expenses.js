import { useState } from 'react';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesChart from './ExpensesChart';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';

function Expenses(props){
    
    const [filteredYear,setFilteredYear] = useState('2022');

    const filterChangeHandler = selectedYear => {
        console.log(selectedYear);
        setFilteredYear(selectedYear);
    };

    const filteredExpenses = props.items.filter((expense) => {
      return expense.date.getFullYear().toString() === filteredYear;
    }); 

    return(
      <div>
      <Card className="expenses">

      <ExpensesFilter selectedYear={filteredYear} onChangeFilter={filterChangeHandler}></ExpensesFilter>
      <ExpensesChart expenses={filteredExpenses} />

      <ExpensesList items={filteredExpenses} />

    </Card>
    </div>

       
    );
}

export default Expenses;