import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './Components/navbar';
import Home from './Pages/home';
import About from './Pages/about';
import Posts from './Pages/posts';
import Contact from './Pages/contact';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
