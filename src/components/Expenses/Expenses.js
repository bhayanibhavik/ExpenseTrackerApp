import React, { useState } from "react";
import "./Expenses.css";
import ExpenseList from "./ExpenseList";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterYearHandler = (year) => {
    setFilteredYear(year);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onFilterYear={filterYearHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpenseList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
