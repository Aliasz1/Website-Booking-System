import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Contact from "./pages/Contact";
import About from "./pages/About";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import NoPage from "./pages/NoPage";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

const App = () => {
  return (
    <>
    <div className="bg-gradient-to-r from-ubd-teal to-ubd-blue space-y-8 tracking-wide font-raleway">
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="About" element={<About />} />
              <Route path="Contact" element={<Contact />} />
              <Route path="Login" element={<Login />} />
              <Route path="Dashboard" element={<Dashboard />} />
              <Route path="*" element={<NoPage />} />
            </Route>
          </Routes>
      </BrowserRouter>
    </div>
    </>
  );
}

export default App;
