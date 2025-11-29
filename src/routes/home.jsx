import { useState } from "react";
import SelectableItem from "../components/selectableItem";
import "./home.css";
import SelectedItem from "../components/selectedItem";

const Home = ({ availableItems }) => {
  let initialSelection = [];
  const savedSelectionList = localStorage.getItem("selectionList");

  if (savedSelectionList !== null) {
    initialSelection = JSON.parse(savedSelectionList);
  }

  const [selectionList, setSelectionList] = useState(initialSelection);

  const addSelectedItem = (selectedItem) => {
    const currentSelection = Array.from(selectionList);
    const existingSelection = currentSelection.find(
      (selection) => selection.item.name == selectedItem.name
    );

    if (typeof existingSelection != "undefined") {
      existingSelection.quantity++;
      setSelectionList(currentSelection);
      localStorage.setItem("selectionList", JSON.stringify(currentSelection));
      return;
    }

    currentSelection.push({
      item: selectedItem,
      quantity: 1,
    });
    setSelectionList(currentSelection);
    localStorage.setItem("selectionList", JSON.stringify(currentSelection));
  };

  const updateItem = (item, delta) => {
    const currentSelection = Array.from(selectionList);
    const selectionItem = currentSelection.find(
      (selection) => selection.item.name == item.name
    );

    if (delta < 0 && selectionItem.quantity == 1) {
      removeItem(item);
      return;
    }

    selectionItem.quantity += delta;
    setSelectionList(currentSelection);
    localStorage.setItem("selectionList", JSON.stringify(currentSelection));
  };

  const removeItem = (item) => {
    const filtered = selectionList.filter((s) => s.item.name !== item.name);
    setSelectionList(filtered);
    localStorage.setItem("selectionList", JSON.stringify(filtered));
  };

  return (
    <div className="home">
      <div className="home__item-list">
        <h1>Select items</h1>
        {availableItems.map((availableItem, index) => (
          <SelectableItem
            key={index}
            item={availableItem}
            onAdd={addSelectedItem}
          />
        ))}
      </div>
      <div className="home__selection-list">
        <h1>Selection</h1>
        {selectionList.map((selection, index) => (
          <SelectedItem
            key={index}
            item={selection.item}
            quantity={selection.quantity}
            onUpdate={updateItem}
            onDelete={removeItem}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
