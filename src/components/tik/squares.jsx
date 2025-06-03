import Btn from "./btn";

export default function Board({ squares, onClick }) {
  function renderSquare(i) {
    return <Btn key={i} value={squares[i]} onClick={() => onClick(i)} />;
  }

  return (
    <div className="board ">
      <div className=" border-1 board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
}
