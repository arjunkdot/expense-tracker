import React, { useState } from 'react';
import './Expenses.css'
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';

import Card from '../UI/Card';
import ExpensesChart from './ExpensesChart';

const Expenses = props => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const expenseFilterHandler = filterYear => {
    setFilteredYear(filterYear);
  }

  const filteredExpenses = props.items.filter(expense => expense.date.getFullYear().toString() === filteredYear);

  return (
    <div>
      <Card className="expenses">
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesFilter select={filteredYear} onYearFilterSelect={expenseFilterHandler} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;