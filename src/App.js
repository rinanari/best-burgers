import './scss/app.scss';
import React from 'react';
import Home from './pages/Home';
import Header from './components/Header';
import NotFound from './pages/NotFound';
import Cart from './pages/Cart';
import Footer from './components/Footer';
import Success from './pages/Success';
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <>
      <Header />
      <div className="wrapper">
        <div className="content">
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="*" element={<NotFound />} />
              <Route path="/success" element={<Success />} />
            </Routes>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
