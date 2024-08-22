import logo from './logo.svg';
import './App.css';
import React from 'react';
import Home from './components/Home';
import Services from './components/Services';
import Gallery from './components/Gallery';
import About from './components/About';
import FAQ from './components/FAQ';
import Blog from './components/Blog';
import Reviews from './components/Reviews';
import Contact from './components/Contact';

const App = () => {
  return (
    <div>
      <Home />
      <Services />
      <Gallery />
      <About />
      <FAQ />
      <Blog />
      <Reviews />
      <Contact />
    </div>
  );
};

export default App;
