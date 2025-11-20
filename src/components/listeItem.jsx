export default function ListItem({item, quantity, onClickAdd, onClickDelete}) {

  
  return (
    <div className="flex-container">
      <div className="item-container">
        <p>{item.name}</p>
        {typeof quantity !== 'undefined' ? <p>Quantity: {quantity}</p> : ""}
        <button className="add-button" onClick={() => onClickAdd(item)}>Add</button>
        <button className="delete-button" onClick={() => onClickDelete (item)}>Delete</button>
     </div>
    </div>
  );
}
