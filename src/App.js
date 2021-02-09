import { useState } from "react";
import { RunPerson } from "./components/RunPerson";

function App() {
  const persons = [
    {
      name: "Bob",
      gender: "male",
      age: "50"
    },
    {
      name: "Alice",
      gender: "male",
      age: "20"
    },
    {
      name: "Sarinya Pamontree",
      gender: "female",
      age: "20"
    }
  ];
  const [count, setCount] = useState(620610810);
  return (
    <div class="ml-2">
      <h3 class="title is-3">Person List</h3>
      {/* Convert me to a component! */}
      {persons.map((i) => {
        return <RunPerson name={i.name} gender={i.gender} age={i.age} />;
      })}
      {/* Code me please! */}
      <h3 class="title is-3">ID Counter</h3>
      <p>YOUR ID HERE</p>
      <p>{count}</p>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(620610810)}>reset</button>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}

export default App;
