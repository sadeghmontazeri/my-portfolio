import React, { useState } from "react";
import ArrowBackSharpIcon from "@mui/icons-material/ArrowBackSharp";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
export default function AddTask({ onClose, onTaskCreate }) {
  const [inpName, setInpName] = useState("");
  const [inpTitle, setInpTitle] = useState("");
  const [inpDate, setInpDate] = useState("");
  const Add = (e) => {
    if (!inpDate || !inpName || !inpTitle) {
      alert("لطفا فرم را تکمیل کنید");
      return;
    }
    const obj = {
      title: inpTitle,
      description: inpName,
      date: inpDate,
      completed: false,
    };
    if (onTaskCreate) {
      onTaskCreate(obj);
    }
    setInpTitle("");
    setInpName("");
    setInpDate("");
  };
  const handleChange = (e) => {
    setInpName(e.target.value);
  };
  const handleChange2 = (e) => {
    setInpDate(e.target.value);
  };
  const handleTitle = (e) => {
    setInpTitle(e.target.value);
  };

  return (
    <div className="flex flex-col w-full h-screen">
      <div
        className=" w-full  px-10 py-10  h-1/3   bg-gradient-to-br from-blue-500 to-purple-600
  rounded-lg shadow-lg  w-fit"
      >
        <div className="header items-center h-1/3 flex justify-between ">
          <div className="icon text-white  basis-1">
            <ArrowBackSharpIcon onClick={onClose} />
          </div>
          <h1 className=" text-white fs-2 ">Create A Task</h1>
          <div className="icon text-white">
            <SearchSharpIcon />
          </div>
        </div>
        <div className="details flex flex-col h-2/3 justify-between  px-10  relative">
          <span className="absolute text-white top-[-20px]">Name</span>
          <input
            value={inpTitle}
            onChange={(e) => {
              handleTitle(e);
            }}
            autoComplete="off"
            className="  border-b-1 focus:outline-none text-white  border-white    h-[45px]"
            type="text"
          />
          <span className="absolute text-white top-[70px]">Date</span>
          <input
            value={inpDate}
            onChange={(e) => {
              handleChange2(e);
            }}
            autoComplete="off"
            className="border-b-1 text-white focus:bg-none focus:outline-none  border-white   h-[45px] "
            type="text"
          />
        </div>
      </div>
      <div className="describe  w-full shadow-2xs px-10 py-10 rounded-3xl h-2/3">
        <div className="p w-full rounded-4xl bg-white relative">
          <span className="absolute text-gray-400 left-10 top-[20px]">
            describe
          </span>
          <input
            value={inpName}
            onChange={(e) => {
              handleChange(e);
            }}
            autoComplete="off"
            className="border-b-1 break-words overflow-x-hidden w-full wrap-normal mt-10! px-10 py-10  text-black focus:bg-none focus:outline-none  border-white   h-[45px] "
            type="text"
          />
        </div>
        <div className="creat flex mt-20 flex-col justify-center items-center">
          <button
            onClick={Add}
            className="[all:unset] text-center! text-white font-extrabold fs-1 h-[100px]! w-full! bg-gradient-to-br! from-blue-500 to-purple-600 rounded-4xl! "
          >
            Create Task
          </button>
        </div>
      </div>
    </div>
  );
}
