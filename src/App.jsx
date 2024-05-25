import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/about/About";
import Navbar from "./components/navbar/Navbar";
import Project from "./components/project/Project";
import Homepage from "./pages/homepage/Homepage";
const App = () => {
 
  return (
    <div>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
