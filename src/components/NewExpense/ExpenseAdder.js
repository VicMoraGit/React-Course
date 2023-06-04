import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";

const ExpenseAdder = (props) => {
  const [formTogglerButton, setFormTogglerButton] = useState(false);
  const saveExpenseDataHandler = (expenseData) => {
    props.onSaveExpenseData(expenseData);
    setFormTogglerButton(false);
  };
  const cancelHandler = (_event) => {
    setFormTogglerButton(false);
  };
  const clickButtonHandler = (_event) => {
    setFormTogglerButton(true);
  };
  if (formTogglerButton) {
    return (
      <ExpenseForm
        onCancelExpense={cancelHandler}
        onSaveExpenseData={saveExpenseDataHandler}
      ></ExpenseForm>
    );
  }

  return (
      <button onClick={clickButtonHandler}>Add Expense</button>
  );
};

export default ExpenseAdder;
