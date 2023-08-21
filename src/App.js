import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

import Notes from "./pages/Notes";
import Personal from "./pages/Personal";
import Projects from "./pages/Projects";
import TaskList from "./pages/TaskList";
import Timeline from "./pages/Timeline";
import UpgradePlan from "./pages/UpgradePlan";
import Calender from "./pages/Calender";
import Login from './pages/Login'
import Register from './pages/Register'
import Contact from "./pages/Contact";

const App = () => {
  const [activeMenu, setActiveMenu] = useState(true);

  return (
    <div>
      <BrowserRouter>
        <div className="flex relative">
          {activeMenu ? (
            <div className="w-64 fixed sidebar bg-white ">
              <Sidebar setActiveMenu={setActiveMenu} activeMenu={activeMenu} />
            </div>
          ) : (
            <div className="w-[60px]">
              <Sidebar setActiveMenu={setActiveMenu} activeMenu={activeMenu} />
            </div>
          )}
          <div
            className={
              activeMenu
                ? "min-h-screen md:ml-64 w-full"
                : "w-full min-h-screen flex-2"
            }
          >
            <div className="fixed navbar w-full ">
              <Navbar setActiveMenu={setActiveMenu} activeMenu={activeMenu} />
            </div>
            <div>
              <Routes>
                <Route path="/" element={<Personal />} />
                <Route
                  path="/personal"
                  element={
                    <Personal
                      setActiveMenu={setActiveMenu}
                      activeMenu={activeMenu}
                    />
                  }
                />

                <Route path="/notes" element={<Notes />} />
                <Route path="/timeline" element={<Timeline />} />
                <Route path="/tasklist" element={<TaskList />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/upgrade" element={<UpgradePlan />} />
                <Route path="/calender" element={<Calender />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
