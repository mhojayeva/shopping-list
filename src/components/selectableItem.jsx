export default function SelectableItem({ item, onAdd }) {
  return (
    <div className="flex-container">
      <div className="item-container">
        <p>{item.name}</p>
        <p>{item.icon}</p>
        <button className="btn" onClick={() => onAdd(item)}>
          Add
        </button>
      </div>
    </div>
  );
}
