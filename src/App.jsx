import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "./routes/home";
import "./App.css";
import AddItem from "./routes/addItem";

function App() {
  const [availableItems, setAvailableItems] = useState([]);
  useEffect(() => {
    fetch("products.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (response) {
        setAvailableItems(response.items);
      });
  }, []);

  function onAddSelectableItem(name) {
    const currentAvailableItems = Array.from(availableItems);
    const exists = currentAvailableItems.find(
      (availableItem) => availableItem.name.toLowerCase() === name.toLowerCase()
    );

    if (typeof exists != "undefined") {
      return;
    }

    currentAvailableItems.push({ name: name });
    setAvailableItems(currentAvailableItems);
  }

  return (
    <BrowserRouter>
      <nav className="nav-styles">
        <Link to="/">Home</Link> | <Link to="/add-item"> Add Item </Link>|{" "}
        <Link to="/jokes"> Interesting Facts </Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home availableItems={availableItems} />} />
        <Route
          path="/add-item"
          element={<AddItem onSubmit={onAddSelectableItem} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
