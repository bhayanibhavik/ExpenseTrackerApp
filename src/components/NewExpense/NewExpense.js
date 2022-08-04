import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [displayForm, setDisplayForm] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: (Math.random() * 100).toString(),
    };
    props.onAddExpense(expenseData);
    setDisplayForm(false);
  };

  const AddExpenseHandler = (e) => {
    setDisplayForm(true);
  };

  const CloseFormHandler = (e) => {
    setDisplayForm(false);
  };

  return (
    <div className="new-expense">
      {!displayForm && (
        <button onClick={AddExpenseHandler}>Add New Expense</button>
      )}
      {displayForm && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={CloseFormHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
