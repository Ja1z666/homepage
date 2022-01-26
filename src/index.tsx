import React from 'react';
import ReactDOM from 'react-dom';
import './css/normalize.css'
import './css/index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { useTransition, animated } from 'react-spring';
import { Main, Works, Scene, Navigation, Footer } from './pages';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Navigation />
      <section className="main">
        <div className="container">
          <Scene />
          <div className="content">
            <Pages />
          </div>
        </div>
      </section>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

function Pages(){
  const location = useLocation();

  const transitions = useTransition(location, {
    from: {
      opacity: 0,
    },
    enter: {
      opacity: 1,
    },
    leave: {
      opacity: 0,
    },
  });

  return(
    <>
      {
        transitions((props, item) => (
          <animated.div style={props}>
            <Routes location={item}>
              <Route path="/" element={<Main />} />
              <Route path="/works" element={<Works />} />
              <Route path="*" element={<Navigate to="/" /> } />
            </Routes>
          </animated.div>
        ))
      }
    </>
  )
}

reportWebVitals();
