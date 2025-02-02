import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

//please checkout readme.md for more information
function App() {
  const [page, setPage] = useState(1);
  return (
    <div className="App" style={{ paddingLeft: "20px" }}>
      <h2>Page{page}</h2>
      <div>
        <button onClick={() => setPage(Math.max(1, page - 1))}>Previous</button>
        <button onClick={() => setPage(Math.min(5, page + 1))}>Next</button>
        <button></button>
      </div>
    </div>
  );
}

export default App;
