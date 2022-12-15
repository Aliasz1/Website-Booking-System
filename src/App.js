import React from "react";
import { UserProvider } from "./contexts/user";
import PrivateRoute from "./pages/Private";
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Contact from "./pages/Contact";
import About from "./pages/About";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import NoPage from "./pages/NoPage";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Signup from "./pages/Signup";

//Index file
const App = () => {

  return (
    //Create Routing across the App
    <>
    <div className="bg-gradient-to-r from-ubd-teal to-ubd-blue space-y-8 tracking-wide font-raleway">
      <BrowserRouter>
        <UserProvider>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="About" element={<About />} />
              <Route path="Contact" element={<Contact />} />
              <Route path="Login" element={<Login />} />
              <Route path="Signup" element={<Signup />} />
              <Route element={<PrivateRoute />}><Route exact path="Dashboard" element={<Dashboard />} /></Route>
              <Route path="*" element={<NoPage />} />
            </Route>
          </Routes>
        </UserProvider>
      </BrowserRouter>
    </div>
    </>
  );
}

export default App;
