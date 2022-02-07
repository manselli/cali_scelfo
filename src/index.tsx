import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

ReactDOM.render(

<Router>
  <Navigation />
  <Routes>
    <Route path="/cali_scelfo/" element={<Home />} />
    <Route path="/cali_scelfo/about" element={<About />} />
    <Route path="/cali_scelfo/contact" element={<Contact />} />
  </Routes>
  </Router>
  
  ,document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
