export default function SelectedItem({ item, quantity, onUpdate, onDelete }) {
  return (
    <div className="flex-container">
      <div className="item-container">
        <p>{item.name}</p>
        <p>{item.icon}</p>
        <p>Quantity: {quantity}</p>
        <div className="btn__container">
          <button className="btn btn--inline" onClick={() => onUpdate(item, 1)}>
            +
          </button>
          <button
            className="btn btn--inline"
            onClick={() => onUpdate(item, -1)}
          >
            -
          </button>
          <button className="btn btn--inline" onClick={() => onDelete(item)}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
