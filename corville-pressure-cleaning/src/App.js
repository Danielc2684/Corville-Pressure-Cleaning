import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Services from './components/Services';
import Gallery from './components/Gallery';
import About from './components/About';
import FAQ from './components/FAQ';
import Blog from './components/Blog';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import './App.css';

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Home />
        <Services />
        <Gallery />
        <About />
        <FAQ />
        <Blog />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
