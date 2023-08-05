import { useState } from "react";
import ExpenseList from "./components/ExpenseList";
import ExpenseFilter from "./components/ExpenseFilter";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [expences, setExpences] = useState([
    { id: 1, description: "500G Protein", amount: 100, category: "Food" },
    { id: 2, description: "123G Carbs", amount: 23, category: "Diet" },
    { id: 3, description: "Invisible ", amount: 98, category: "Beauty" },
    { id: 4, description: "Non Profit", amount: 45, category: "Org" },
  ]);

  const visibleExpences = selectedCategory
    ? expences.filter((expence) => expence.category === selectedCategory)
    : expences;

  return (
    <div>
      <div className="container mt-5">
        <ExpenseFilter
          categories={["Food", "Diet", "Beauty", "Org"]}
          onSelectCategory={(category) => setSelectedCategory(category)}
        />
        <ExpenseList
          expences={visibleExpences}
          handleDelete={(id) =>
            setExpences(expences.filter((e) => e.id !== id))
          }
        ></ExpenseList>
      </div>
    </div>
  );
}

export default App;
