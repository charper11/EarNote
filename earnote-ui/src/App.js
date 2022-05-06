import './App.css';
import Home from './Pages/Home.js';
import Unit from './Pages/Unit.js';
import Lesson from './Pages/Lesson.js';
import Result from './Pages/Result.js';
import Header from './Components/Header.js';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from 'react';

function App() {

  const [score, setScore] = useState(0);

  return (
    <BrowserRouter>
    <div>
      <Header />
      <Routes>
      <Route path='/' element={<Home />} exact />
      <Route path='/unit' element={<Unit />} exact />
      <Route path='/lesson' element={<Lesson score={score} setScore={setScore} />} exact />
      <Route path='/result' element={<Result score={score}/>} exact />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
