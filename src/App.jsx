import { useState } from "react";
import TableOfLaunches from "./components/TableOfLaunches";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>🚀 Upcoming Rocket Launches 🚀</h1>
      <TableOfLaunches />
    </>
  );
}

export default App;
