import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const expenses = [
    {
      id: 1,
      title: "Bike Parking Fees",
      amount: 1235,
      date: new Date(2022, 6, 1),
    },
    {
      id: 2,
      title: "Monthly Gas",
      amount: 200,
      date: new Date(2022, 6, 5),
    },
    {
      id: 3,
      title: "New Battery",
      amount: 1200,
      date: new Date(2022, 6, 10),
    },
    {
      id: 4,
      title: "Change of tyres",
      amount: 3500,
      date: new Date(2022, 6, 10),
    },
    {
      id: 5,
      title: "Tow Service",
      amount: 400,
      date: new Date(2022, 6, 10),
    },
    {
      id: 6,
      title: "Bike Detailing",
      amount: 5000,
      date: new Date(2022, 6, 15),
    },
  ];

  const addExpenseHandler = (expenseData) => {
    console.log(expenseData);
  };

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
