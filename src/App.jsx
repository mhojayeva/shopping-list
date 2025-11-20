import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useState } from "react";
import Home from './routes/home';
import "./App.css";
import "./index.css";
import AddItem from './routes/addItem';
import ListItem from './components/listeItem';

function App() {
  const [availableItems, setAvailableItems] = useState([
    {name: "Apple"},
    {name: "Orange"},
  ])

  function onAddItem(name){
    const currentAvailableItems = Array.from(availableItems)
    const exists = currentAvailableItems.find(availableItem => availableItem.name.toLowerCase() == name.toLowerCase())


    if (typeof exists != 'undefined') {
      return
    }

    currentAvailableItems.push({name: name})
    setAvailableItems(currentAvailableItems)
  }
   function onClickDelete (item) {
    const filtered = availableItems.filter (
      i => i.name !== item.name
    );
    setAvailableItems(filtered);
}


  return (
    <BrowserRouter>
      <nav className='nav-styles'>
        <Link to="/">Home</Link> |{" "}
        <Link to="/add-item">AddItem</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home availableItems={availableItems} onClickDelete={onClickDelete} />} />
        <Route path="/add-item" element={<AddItem onSubmit={onAddItem} />} />
       
      </Routes>
    </BrowserRouter>
  );
}

export default App;
