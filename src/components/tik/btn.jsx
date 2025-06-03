export default function Btn({ value, onClick }) {
  return (
    <button className="border-1 " value={value} onClick={onClick}>
      {value}
    </button>
  );
}
