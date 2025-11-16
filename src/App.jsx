import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useState } from "react";
import Home from './routes/home';
import "./App.css";
import "./index.css";
import AddItem from './routes/addItem';

function App() {
  const [availableItems] = useState([
    {name: "Apple"},
    {name: "Orange"},
  ])

  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/add-item">AddItem</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home availableItems={availableItems} test="1" />} />
        <Route path="/add-item" element={<AddItem />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
