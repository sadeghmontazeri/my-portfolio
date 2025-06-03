import React from "react";

function Score({ onPoint }) {
  return (
    <div>
      <div className="bg-amber-300 h-[500px] w-[500px] rounded-2xl flex justify-center items-center">
        Your Score Is : {onPoint}
      </div>
    </div>
  );
}

export default Score;
