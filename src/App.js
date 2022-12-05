import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from './components/About';
import Notfound from './components/Notfound';
import TodoContainer from './TodoContainer';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<TodoContainer />} />
        <Route path="/about" element={<About />} />
        <Route path="/notfound" element={<Notfound />} />
      </Routes>
    </>

  );
}

export default App;
