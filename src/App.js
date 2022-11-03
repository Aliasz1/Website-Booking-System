import React from "react";

import Contact from "./pages/Contact";
import About from "./pages/About";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import NoPage from "./pages/NoPage";
import Login from "./pages/Login";

import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <>
    <div className="bg-cyan space-y-8 tracking-wide">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="About" element={<About />} />
            <Route path="Contact" element={<Contact />} />
            <Route path="Login" element={<Login />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
    </>

    
  );
}

export default App;
