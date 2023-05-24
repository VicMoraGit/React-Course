import Card from "../UI/Card";
import ExpenseItem from "../Expenses/ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

const Expenses = (props) => {
  const [filteredYear, setYearFilter] = useState("2020");

  const filterHandler = (year) => {
    setYearFilter(year);
  };
  const filteredExpenses = props.items.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  );

  let expensesContent = <p>No expenses found.</p>;

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense) => {
      return (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      );
    });
  }
  
  return (
    <Card className="expenses">
      <ExpensesFilter onYearFilter={filterHandler} selected={filteredYear} />
      {expensesContent}

    </Card>
  );
};

export default Expenses;
