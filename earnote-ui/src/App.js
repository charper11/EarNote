import './App.css';
import Home from './Pages/Home.js';
import Unit from './Pages/Unit.js';
import Lesson from './Pages/Lesson.js';
import Result from './Pages/Result.js';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <div>
      <Routes>
      <Route path='/' element={<Home />} exact />
      <Route path='/unit' element={<Unit />} exact />
      <Route path='/lesson' element={<Lesson />} exact />
      <Route path='/result' element={<Result />} exact />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
