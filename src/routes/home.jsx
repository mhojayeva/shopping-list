import { useState } from "react";
import ListItem from "../components/listeItem";
import "./home.css";

const Home = ({availableItems}) => {
  const [selectionList, setSelectionList] = useState([]);

  const AddSelectionItem = (selectedItem) => {
    const currentSelection = Array.from(selectionList)
    const existingSelection = currentSelection.find(selection => selection.item.name == selectedItem.name)

    if (typeof existingSelection != 'undefined') {
      existingSelection.quantity++
      setSelectionList(currentSelection)
      return
    }

    currentSelection.push({
      item: selectedItem,
      quantity: 1,
    })
    setSelectionList(currentSelection)
  };
  
  return (
    <div className="home">
      <div className="home__item-list">
        <h1>Select items</h1>
        {availableItems.map((availableItem, index) => (
          <ListItem key={index} item={availableItem} onClickAdd={AddSelectionItem} />
        ))}
      </div>
      <div className="home__selection-list">
        <h1>Selection</h1>
        {selectionList.map((selection, index) => (
          <ListItem key={index} item={selection.item} quantity={selection.quantity} />
        ))}
      </div>
    </div>
  );
};

export default Home;
