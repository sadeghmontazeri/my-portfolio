import React from "react";
import frontMentor from "../assets/frontmentor.png";
import weather from "../assets/weather.png";
import tic from "../assets/tic.png";
import quizPng from "../assets/quiz.png";
import { Outlet, Link, useLocation } from "react-router-dom";
export default function Projects() {
  const location = useLocation();
  const showProjectsList = location.pathname === "/services";
  return (
    <div className="min-h-screen d bg-gray-100   w-full ">
      {showProjectsList ? (
        <div className="grid lg:grid-cols-2 grid-cols-1 md:pt-8 py-4 gap-4">
          <div className="w-full tictak bg-white/10 backdrop-blur-md rounded-xl shadow-lg p-4 hover:shadow-xl transition-shadow">
            <Link
              to="project1"
              className="flex text-reset text-decoration-none  flex-col items-center text-black no-underline"
            >
              <img
                src={tic}
                className="h-[200px] md:h-[250px] w-auto object-contain rounded-md mb-3"
                alt="Tic Tac Toe game"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://placehold.co/400x300/334155/e2e8f0?text=Image+Error";
                }}
              />
              <h3 className="text-xl text-reset text-text-decoration-none font-semibold mb-1">
                بازی دوز (Tic Tac Toe)
              </h3>
              <p className="text-sm text-reset text-decoration-none text-black-300 text-center">
                یک بازی کلاسیک دونفره دوز.
              </p>
            </Link>
          </div>
          <div className="w-full  tictak bg-white/10 backdrop-blur-md rounded-xl shadow-lg p-4 hover:shadow-xl transition-shadow">
            <Link
              className=" text-reset flex flex-col justify-content-center text-decoration-none text-center"
              to="project2"
            >
              <img
                src={quizPng}
                className="h-[200px]   md:h-[250px] w-auto object-contain rounded-md mb-3"
                alt="Project 2"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://placehold.co/400x300/334155/e2e8f0?text=Image+Error";
                }}
              />
              <h3 className="text-xl text-reset text-decoration-none  font-semibold mb-1">
                پروژه دوم
              </h3>
              <p className="text-sm  text-decoration-none  text-reset  text-black-300 text-center">
                پرسش سوالات متنوع با امکان دیدن نمره در آخر به صورت داینامیک
              </p>
            </Link>
          </div>
          <div className="w-full tictak bg-white/10 backdrop-blur-md rounded-xl shadow-lg p-4 hover:shadow-xl transition-shadow">
            <Link
              className=" mt-10.5 text-reset flex flex-col justify-content-center text-decoration-none text-center"
              to="project3"
            >
              <img
                src={weather}
                className="h-[200px] md:h-[250px] w-auto object-contain rounded-md mb-3"
                alt="Project3"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://placehold.co/400x300/334155/e2e8f0?text=Image+Error";
                }}
              />
              <h3 className="text-xl text-reset text-decoration-none  font-semibold mb-1">
                پروژه سوم
              </h3>
              <p className="text-sm  text-decoration-none  text-reset  text-black-300 text-center">
                یک پروژه آب و هوایی است
              </p>
            </Link>
          </div>
          <div className="w-full tictak bg-white/10 backdrop-blur-md rounded-xl shadow-lg p-4 hover:shadow-xl transition-shadow">
            <Link
              className=" mt-10.5 text-reset flex flex-col justify-content-center text-decoration-none text-center"
              to="project4"
            >
              <img
                src={frontMentor}
                className="h-[200px]   md:h-[250px] w-auto object-contain rounded-md mb-3"
                alt="Project 2"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://placehold.co/400x300/334155/e2e8f0?text=Image+Error";
                }}
              />
              <h3 className="text-xl text-reset text-decoration-none  font-semibold mb-1">
                پروژه چهارم
              </h3>
              <p className="text-sm  text-decoration-none  text-reset  text-black-300 text-center">
                پروژه تسک منیجر با Api به صورت real time در supabase
              </p>
            </Link>
          </div>
          {/* </Link> */}
        </div>
      ) : (
        <Outlet />
      )}
    </div>
  );
}
