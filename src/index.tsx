import React from 'react';
import ReactDOM from 'react-dom';
import './css/normalize.css'
import './css/index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Main, Works, Navigation, Footer } from "./pages";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/works" element={<Works />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
