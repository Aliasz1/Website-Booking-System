import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./components/Blog";
import Login from "./pages/Login.page";
import Dashboard from "./pages/Dashboard.page";
import Preferences from "./pages/Preferences.page";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Blog from "./components/Blog";

import useToken from './hooks/useToken';

function setToken(userToken) {
  sessionStorage.setItem('token', JSON.stringify(userToken));
}

function getToken() {
  const tokenString = sessionStorage.getItem('token');
  const userToken = JSON.parse(tokenString);
  return userToken?.token
}

function App() {

  const { token, setToken } = useToken();

  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
    <>
      <div className="bg-cyan space-y-8 tracking-wide">
        <Header />
          <BrowserRouter>
            <Routes>
              <Route path="/Home" element={<Home />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/preferences" element={<Preferences />} />
            </Routes>
          </BrowserRouter>
        <Footer />
      </div>
    </>

    
  );
}

export default App;
