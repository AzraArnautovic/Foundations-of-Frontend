import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './Components/navbar';
import { ThemeProvider, } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Home from './Pages/home';
import About from './Pages/about';
import Posts from './Pages/posts';
import Contact from './Pages/contact';
import Adopt from './Pages/adopt';
import '@fontsource/roboto';
import theme from './theme'; 

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/adopt" element={<Adopt />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
