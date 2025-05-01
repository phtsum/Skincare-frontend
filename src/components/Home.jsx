import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import AboutUs from './components/AboutUs';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Products from './components/Products'; // create this if not exists
import Location from './components/Location';

function App() {
  return (
    <Router>
      <Navbar />
      <Hero />
      <AboutUs />
      <Routes>
        <Route path="/Products" element={<Products />} />
      </Routes>
      <Location />
      <Footer />
    </Router>
  );
}

export default Home;
