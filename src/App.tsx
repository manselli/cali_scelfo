import { Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Home from './components/pages/Home';

function App() {
  return (
   <>
  <Navigation />
  <Routes>
    <Route path="/cali_scelfo/" element={<Home />} />
    <Route path="/cali_scelfo/about" element={<About />} />
    <Route path="/cali_scelfo/contact" element={<Contact />} />
  </Routes>
  </>
  );
}

export default App;
