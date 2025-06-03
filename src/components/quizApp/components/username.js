import React, { useRef, useState } from "react";

export default function Username({ onPropName, onStart }) {
  const inputNameRef = useRef(null);
  const sentName = () => {
    const name = inputNameRef.current.value;
    if (name === "") {
      alert("please enter your name");
      return;
    }
    onPropName(name);
    onStart((prev) => !prev);
  };

  return (
    <div>
      <form className="text-center" action="get">
        <h1>enter your name</h1>
        <input
          ref={inputNameRef}
          className="rounded-sm border-1 border-gray-500  outline-0 focus:border-gray-500 mb-5 h-[40px] text-center"
          type="text"
          name=""
          id=""
          placeholder="EX . sadegh"
        />
        <br />
        <input
          className="text-black w-40 h-10 bg-green-500 rounded-md"
          type="button"
          value={"Start quiz"}
          name=""
          id=""
          onClick={sentName}
        />
      </form>
    </div>
  );
}
