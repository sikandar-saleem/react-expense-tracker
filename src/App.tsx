import { useState } from "react";
import ExpenseList from "./components/ExpenseList";

function App() {
  const [expences, setExpences] = useState([
    { id: 1, description: "500G Protein", amount: 100, category: "Food" },
    { id: 2, description: "123G Carbs", amount: 23, category: "Diet" },
    { id: 3, description: "Invisible ", amount: 98, category: "Beauty" },
    { id: 4, description: "Non Profit", amount: 45, category: "Org" },
  ]);

  return (
    <div>
      <div className="container mt-5">
        <ExpenseList
          expences={expences}
          handleDelete={(id) =>
            setExpences(expences.filter((e) => e.id !== id))
          }
        ></ExpenseList>
      </div>
    </div>
  );
}

export default App;
