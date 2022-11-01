import React from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Blog from "./components/Blog";
import Profile from "./components/Profile";
import Carousel from "./components/Carousel";
import BookForm from "./components/BookForm";

function App() {
  return (
    <>
      <div className="bg-cyan space-y-8 tracking-wide">
        <Header />
        <Profile />
        <Carousel />
        <BookForm />
        <Blog />
        <Footer />
      </div>
    </>

    
  );
}

export default App;
