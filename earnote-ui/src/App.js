import './App.css';
import Home from './Pages/Home.js';
import Unit from './Pages/Unit.js';
import Lesson from './Pages/Lesson.js';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <div>
      <Routes>
      <Route path='/' element={<Home />} exact />
      <Route path='/unit' element={<Unit />} exact />
      <Route path='/lesson' element={<Lesson />} exact />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
