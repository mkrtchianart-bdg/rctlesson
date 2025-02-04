import React, { useEffect, useState } from "react";
import TodoList from "./TodoList";



function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setCount(count + 1);
    }, 1000);
  }, []);

  return (
    <>
      <TodoList /> 
      <span>{count}</span>
    </>
  );
}

export default App;
