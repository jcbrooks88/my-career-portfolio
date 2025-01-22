import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/App.css';
import Header from './components/Header';
import Footer from './components/Footer';


// Lazy load pages for better performance
const AboutMe = lazy(() => import('./pages/AboutMe'));
const Portfolio = lazy(() => import('./pages/Portfolio'));
const Contact = lazy(() => import('./pages/Contact'));
const Resume = lazy(() => import('./pages/Resume'));

function App() {
  return (
    <Router>
      <div className="App">
        <Header>
        </Header>
        
        <main>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/aboutme" element={<AboutMe />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="*" element={<div>Page Not Found</div>} />
            </Routes>
          </Suspense>
        </main>
        
        <Footer>
        </Footer>
      </div>
    </Router>
  );
}

export default App;
