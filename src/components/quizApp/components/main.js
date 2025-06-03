import React, { useEffect } from "react";
import { useState } from "react";
import Username from "./username";
import Quiz from "./quiz";
export default function Main() {
  const [Start, setStart] = useState(false);
  const [Name, setName] = useState("");
  const nameHandler = (name) => {
    setName(name);
  };
  useEffect(() => {
    console.log(Name);
    console.log(Start);
  }, [Name]);
  const StartHandler = () => {
    setStart(true);
  };

  return (
    <div className=" flex justify-center items-center h-screen w-screen">
      <div className="border-2 w-[600px] h-[600px] shadow-2xs rounded-xl  ">
        <div className="Child1 flex justify-center items-center h-full w-full">
          {!Start && (
            <Username onPropName={nameHandler} onStart={StartHandler} />
          )}
          {Start && <Quiz onName={Name} />}
        </div>
      </div>
    </div>
  );
}
