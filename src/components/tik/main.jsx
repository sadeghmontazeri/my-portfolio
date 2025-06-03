import React, { useEffect, useState } from "react";
import Btn from "./btn";
import { Winner } from "./winner";
export default function Tik() {
  const [square, setSquare] = useState(Array(9).fill(null));
  const [nextIsX, setNextIsX] = useState(true);
  const [winner, setWinner] = useState(null);
  useEffect(() => {
    const calculatedWinner = Winner(square);
    setWinner(calculatedWinner);
  }, [square]);

  function nextFunction(i) {
    if (winner || square[i]) {
      return;
    }

    const newSquare = [...square];
    const nextMove = nextIsX ? "X" : "O";
    newSquare[i] = nextMove;
    setSquare(newSquare);
    setNextIsX(!nextIsX);
  }

  const resetGame = () => {
    setSquare(Array(9).fill(null)); // ریست کردن تمام مربع‌ها به null
    setNextIsX(true); // شروع مجدد با X
    setWinner(null); // تنظیم State برنده به null (باعث رندر مجدد و شروع بازی می‌شود)
  };

  const isBoardFull = square.every((square) => square !== null);
  if (winner) {
    return (
      <div className="flex justify-center items-center h-full w-full flex-col p-4">
        {/* استایل برای پیام برنده، می‌توانید از کلاس‌های خودتان استفاده کنید */}
        <div className="bg-green-500 text-white text-2xl md:text-4xl font-bold p-6 md:p-12 rounded-lg shadow-xl text-center w-full max-w-sm md:max-w-md">
          <h1 className="mb-4">Winner is: {winner}!</h1>
          <h2>Congrats!!</h2>
        </div>
        <button
          onClick={resetGame}
          className="mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg text-lg shadow-md transition-colors duration-150"
        >
          Try Again!
        </button>
      </div>
    );
  } else if (isBoardFull) {
    return (
      <div className="flex justify-center items-center h-full w-full flex-col p-4">
        {/* استایل برای پیام مساوی، می‌توانید رنگ پس‌زمینه را تغییر دهید */}
        <div className="bg-yellow-500 text-white text-2xl md:text-4xl font-bold p-6 md:p-12 rounded-lg shadow-xl text-center w-full max-w-sm md:max-w-md">
          <h1 className="mb-4">It's a Draw!</h1>
          <h2>Well Played!</h2>
        </div>
        <button
          onClick={resetGame}
          className="mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg text-lg shadow-md transition-colors duration-150"
        >
          Try Again!
        </button>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen w-full p-4">
        <h2 className="text-2xl font-bold mb-5 text-gray-800">
          Next Player: {nextIsX ? "X" : "O"}
        </h2>
        <div className="grid grid-cols-3 gap-1 md:gap-2 w-full max-w-xs sm:max-w-sm md:max-w-[650px] aspect-square bg-red-300 p-1 md:p-2 rounded-lg shadow-lg">
          {square.map((value, i) => (
            <Btn key={i} value={value} onClick={() => nextFunction(i)} />
          ))}
        </div>
      </div>
    );
  }
}
