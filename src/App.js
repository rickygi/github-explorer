import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { NotFound, Search } from './components';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Search />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
