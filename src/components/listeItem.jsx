export default function ListItem({item, quantity, onClickAdd}) {
  return (
    <div className="flex-container">
      <div className="item-container">
        <p>{item.name}</p>
        {typeof quantity !== 'undefined' ? <p>Quantity: {quantity}</p> : ""}
        <button className="add-button" onClick={() => onClickAdd(item)}>Add</button>
      </div>
    </div>
  );
}
