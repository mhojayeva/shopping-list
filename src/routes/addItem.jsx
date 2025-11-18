import { useState } from "react";

const AddItem = ({ onSubmit }) => {

  const [itemName, setItemName] = useState("");

  return (
    <div className="form">
      <form onSubmit={(e) => {
          e.preventDefault();

           if (itemName.trim() === "") return;

             onSubmit(itemName);
             setItemName ("")
        }}
      >
        <input className="input"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
          placeholder="Name of Item"
        />
        <button className="submitButton" type="Submit">Submit</button>
      </form>
    </div>
  );
};

export default AddItem;
