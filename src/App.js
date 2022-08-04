import React, { useState } from "react";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: 1,
    title: "Bike Parking Fees",
    amount: 1235,
    date: new Date(2019, 6, 1),
  },
  {
    id: 2,
    title: "Monthly Gas",
    amount: 200,
    date: new Date(2019, 6, 5),
  },
  {
    id: 3,
    title: "New Battery",
    amount: 1200,
    date: new Date(2020, 6, 10),
  },
  {
    id: 4,
    title: "Change of tyres",
    amount: 3500,
    date: new Date(2021, 6, 10),
  },
  {
    id: 5,
    title: "Tow Service",
    amount: 400,
    date: new Date(2021, 6, 10),
  },
  {
    id: 6,
    title: "Bike Detailing",
    amount: 5000,
    date: new Date(2021, 6, 15),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (newExpense) => {
    setExpenses((prevExpense) => {
      return [newExpense, ...prevExpense];
    });
  };

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
