import React, { useState, useEffect } from "react";
import AboutPage from "./components/about";
import ContactPage from "./components/contact";
import ServicePage from "./components/projects";
import HomePage from "./components/home";
import Tik from "./components/tik/main";
import Weather from "./components/weatherApp/main";
import Taskmanager from "./components/taskManager/main";
import Quizapp from "./components/quizApp/components/main";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import "./output.css";
import "./app.css";
import { IoMdMenu } from "react-icons/io";

function App() {
  const [menu, setMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [firstpage, setFirstpage] = useState(true);
  const location = useLocation();
  const [sideBarOff, setSideBarOff] = useState(false);

  useEffect(() => {
    if (location.pathname !== "/") {
      setFirstpage(false);
    } else {
      setFirstpage(true);
    }
  }, [location]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 400px)");
    const handleResize = (e) => {
      setIsMobile(e.matches);
    };
    setIsMobile(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleResize);
    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);
  const toggleMenu = () => {
    setSideBarOff(!sideBarOff);
  };
  return (
    <div className="body backdrop-blur-md flex min-h-screen">
      {/* {isMobile && (
        <button
          onClick={toggleMenu}
          className="text-white fs-1 fixed top-[50px] right-[30px] z-10"
        >
          <IoMdMenu />
        </button>
      )} */}
      {sideBarOff && (
        <button
          onClick={toggleMenu}
          className="text-black fs-3 fixed top-[80px] right-[10px] z-10"
        >
          <IoMdMenu />
        </button>
      )}

      {!sideBarOff && (
        <div
          className="min-h-screen left-0 top-0 justify-around flex-col items-center 
      backdrop-blur-  rounded-r-3xl opacity-88  backdrop-blur-3xl
        max-[400px]:!w-[100%] max-[600px]:!text-sm  min-[600px]:w-[40%]"
        >
          <button
            onClick={toggleMenu}
            className="text-black fs-3 fixed top-[80px] right-[10px] z-10"
          >
            <IoMdMenu />
          </button>
          <div className="h-2/5  flex-col place-items-center place-content-center">
            <h1
              className="max-[500px]:!fs-5 text-3xl   place-content-center
           w-fit font-extrabold text-black"
            >
              PORTFOLIO
            </h1>
            <h3 className="text-3xl max-[500px]:!text-sm font- max-[600px]:!text-sm font-thin place-content-center text-black">
              محمد صادق منتظریها
            </h3>
          </div>
          <div className="text-2xl h-3/5 flex flex-col w-full gap-10 text-black">
            <Link
              to="/home"
              className="text-reset text-decoration-none cursor-pointer pb-2 w-[30%] place-self-center border-b text-center select-none"
            >
              خانه
            </Link>
            <Link
              to="/about"
              className="cursor-pointer text-reset text-decoration-none pb-2 w-[30%] place-self-center border-b text-center select-none"
            >
              درباره من
            </Link>
            <Link
              to="/services"
              className="cursor-pointer text-reset text-decoration-none pb-2 w-[30%] place-self-center border-b text-center select-none"
            >
              پروژه ها
            </Link>
            <Link
              to="/contact"
              className="cursor-pointer text-reset text-decoration-none pb-2 text-decoration-none w-[30%] place-self-center border-b text-center select-none"
            >
              راه ارتباطی
            </Link>
          </div>
        </div>
      )}

      <div className="details h-screen max-[400px]:hidden overflow-auto w-full items-center">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route
              path="/home"
              element={
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1.5 }}
                  className="h-[100vh] w-full"
                >
                  <HomePage />
                </motion.div>
              }
            />
            <Route
              path="/about"
              element={
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1.5 }}
                >
                  <AboutPage />
                </motion.div>
              }
            />
            <Route
              path="/services"
              element={
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1.5 }}
                >
                  <ServicePage />
                </motion.div>
              }
            >
              <Route
                path="project1"
                element={
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.5 }}
                    className="h-full w-full flex justify-center items-center"
                  >
                    <Tik />
                  </motion.div>
                }
              />
              <Route
                path="project2"
                element={
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.5 }}
                    className="h-full w-full flex justify-center items-center"
                  >
                    <Quizapp />
                  </motion.div>
                }
              />
              <Route
                path="project4"
                element={
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.5 }}
                    className="h-full w-full flex justify-center items-center"
                  >
                    <Taskmanager />
                  </motion.div>
                }
              />
              <Route
                path="project3"
                element={
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.5 }}
                    className="min-h-screen w-full"
                  >
                    <Weather />
                  </motion.div>
                }
              />
            </Route>
            <Route
              path="/contact"
              element={
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1.5 }}
                >
                  <ContactPage />
                </motion.div>
              }
            />
            <Route
              path="/"
              element={
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 2.5 }}
                >
                  <HomePage />
                </motion.div>
              }
            />
            {/* <Route
              path="project1"
              element={
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1.5 }}
                  className="h-full w-full flex justify-center items-center"
                >
                  <Main />
                </motion.div>
              }
            /> */}
          </Routes>

          {firstpage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 2.5 }}
            >
              <img
                className="rounded-[10%] text-white h-[200px]"
                src="./sadegh.jpg"
                alt=""
              />
              <h1 className="text-black">My PortFolio</h1>
              <h6 className="text-black">محمد صادق منتظریها</h6>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

function AppWrapper() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

export default AppWrapper;
// RWNBX
