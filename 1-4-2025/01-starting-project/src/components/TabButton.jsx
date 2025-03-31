export default function TabButton({ onSelect, children, isSelected }) {
  return (
    <button className={isSelected ? "active" : ""} onClick={onSelect}>
      {children}
    </button>
  );
}
