import { useState } from "react";
import ListItem from "../components/listeItem";
import "./home.css";
import AddItem from "./addItem";

const Home = ({availableItems, onClickDelete }) => {
  let initialSelection = []
  const savedSelectionList = localStorage.getItem('selectionList')

  if (savedSelectionList !== null) {
      initialSelection = JSON.parse(savedSelectionList)
  }

  const [selectionList, setSelectionList ] = useState(initialSelection);

  const addSelectionItem = (selectedItem) => {
    const currentSelection = Array.from(selectionList)
    const existingSelection = currentSelection.find(selection => selection.item.name == selectedItem.name)

    if (typeof existingSelection != 'undefined') {
      existingSelection.quantity++
      setSelectionList(currentSelection)
      localStorage.setItem('selectionList', JSON.stringify(currentSelection))
      return
    }

    currentSelection.push({
      item: selectedItem,
      quantity: 1,
    })
    setSelectionList(currentSelection)
    localStorage.setItem('selectionList', JSON.stringify(currentSelection))
  };
  

  
  return (
    <div className="home">
      <div className="home__item-list">
        <h1>Select items</h1>
        {availableItems.map((availableItem, index) => (
          <ListItem key={index} item={availableItem} onClickAdd={addSelectionItem} onClickDelete={onClickDelete}/>
        ))}
      </div>
      <div className="home__selection-list">
        <h1>Selection</h1>
        {selectionList.map((selection, index) => (
          <ListItem key={index} item={selection.item} quantity={selection.quantity} onClickDelete={onClickDelete}/>
        ))}
      </div>
    </div>
  );
};

export default Home;
