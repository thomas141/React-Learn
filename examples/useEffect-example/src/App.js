import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

//please checkout readme.md for more information
function App() {
  const [page, setPage] = useState(1);
  const [option, setOption] = useState("Most Popular");
  // useEffect is a hook that runs after the first render and after every update
  useEffect(() => {
    console.log("Page changed to:", page);
  }, [page]);

  useEffect(() => {
    console.log("Selection changed to:", option);
  }, [option]);

  return (
    <div className="App" style={{ paddingLeft: "20px" }}>
      <h2>Page{page}</h2>
      <div>
        <button onClick={() => setPage(Math.max(1, page - 1))}>Previous</button>
        <button onClick={() => setPage(Math.min(5, page + 1))}>Next</button>
      </div>
      <h3>Selected: {option}</h3>
      <select
        onChange={(event) => {
          setOption(event.target.value);
          //console.log(event);
        }}
      >
        <option value="Most Popular">Most Popular</option>
        <option value="Least Popular">Least Popular</option>
        <option value="Newest">Newest</option>
        <option value="Oldest">Oldest</option>
      </select>
    </div>
  );
}

export default App;
