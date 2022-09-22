import { useState, useCallback } from "react";
import { ChildMemo } from "./components/ChildComp";

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Child组件");

  console.log("父组件?");

  return (
    <>
      <button
        onClick={(e) => {
          setCount(count + 1);
        }}
      >
        加1
      </button>
      <p>count:{count}</p>
      <ChildMemo
        name={name}
        onClick={useCallback((newName: string) => setName(newName), [])}
      />
    </>
  );
}

export default App;
