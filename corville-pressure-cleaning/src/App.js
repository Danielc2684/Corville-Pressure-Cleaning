import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import Gallery from './components/Gallery/Gallery';
import About from './components/About/About';
import FAQ from './components/FAQ/FAQ';
import Blog from './components/Blog/Blog';
import Reviews from './components/Reviews/Reviews';
import Contact from './components/Contact/Contact';
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
