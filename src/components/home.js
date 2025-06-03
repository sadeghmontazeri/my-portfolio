import React from "react";
import "../app.css";
export default function Home() {
  return (
    <div className="HomePage bg-gray-100 bg-cover flex flex-col justify-center items-center h-screen">
      <img className="rounded-[10%]  h-[200px]" src="./sadegh.jpg" alt="" />
      <h1 className="text-black">My PortFolio</h1>
      <h6 className="text-black">محمد صادق منتظریها</h6>
    </div>
  );
}
