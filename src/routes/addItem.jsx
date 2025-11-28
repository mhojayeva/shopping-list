import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddItem = ({ onSubmit }) => {
  const [itemName, setItemName] = useState("");
  const navigate = useNavigate();

  return (
    <div className="form">
      <form
        onSubmit={(e) => {
          e.preventDefault();

          if (itemName.trim() === "") return;

          onSubmit(itemName);
          navigate(-1);
        }}
      >
        <p> You did not find your product,</p>
        <p> Don not worry! </p>
        <p>You can easily add it here </p>
        <input
          className="input"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
          placeholder="Name of Item"
        />
        <button className="btn" type="Submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddItem;
