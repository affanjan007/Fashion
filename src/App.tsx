import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Fashion from './pages/Fashion';
import Beauty from './pages/Beauty';
import Skincare from './pages/Skincare';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="fashion" element={<Fashion />} />
          <Route path="beauty" element={<Beauty />} />
          <Route path="skincare" element={<Skincare />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;