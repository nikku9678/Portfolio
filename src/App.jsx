import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/about/About";
import Navbar from "./components/navbar/Navbar";
import Project from "./components/project/Project";
import Homepage from "./pages/homepage/Homepage";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
const App = () => {
 
  return (
    <div>
      <BrowserRouter>
      {/* <Navbar /> */}
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
};

export default App;
