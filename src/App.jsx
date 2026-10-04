import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Converter from './pages/Converter';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="converter" element={<Converter />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
