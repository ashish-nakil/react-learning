import Expenses from "./components/Expenses/Expenses";

function App() {
  const expenses = [
    { title: "Test 1", amount: 100, date: new Date(2022, 2, 11) },
    { title: "Test 2", amount: 200, date: new Date(2022, 2, 12) },
    { title: "Test 3", amount: 300, date: new Date(2022, 2, 13) },
  ];
  return (
    <div>
      <Expenses data = {expenses}/>
    </div>
  );
}

export default App;
