import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [items, setItems] = useState([]);
  const [limit, setLimit] = useState(6);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setItems(data);
      });
  }, []);

  const handleLoadMoreItems = () => {
    setLimit((prevLimit) => prevLimit + 6);
  };

  return (
    <>
      <h1>Hello, React!</h1>
      <p>Number of items: {items.length}</p>
      {items.slice(0, limit).map((item, index) => {
        return (
          <div key={index} className="item">
            <h3 id="userId">{item.id}</h3>
            <p id="title">{item.title}</p>
          </div>
        );
      })}

      <button width="100%" height="50px" onClick={handleLoadMoreItems}>
        Load More...
      </button>
    </>
  );
}

export default App;
