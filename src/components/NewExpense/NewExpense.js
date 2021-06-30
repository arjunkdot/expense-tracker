import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {

  const [showForm, setShowForm] = useState(false);

  const toggleShowForm = () => {
    setShowForm(!showForm);
  }

  const saveExpenseDataHandler = (enteredExpense) => {
    const expenseData = {
      ...enteredExpense,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
    setShowForm(false);
  }
  return (<div className="new-expense">
    {!showForm && <button type="button" onClick={toggleShowForm}>Add New Expense</button>}
    {showForm && <ExpenseForm onCancel={toggleShowForm} onSaveExpenseData={saveExpenseDataHandler} />}
  </div>)
}

export default NewExpense;