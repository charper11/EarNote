import './App.css';
import Home from './Pages/Home.js';
import Unit from './Pages/Unit.js';
import Lesson from './Pages/Lesson.js';
import Result from './Pages/Result.js';
import Header from './Components/Header.js';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from 'react';
import audioPaths from './Data/Data';

function App() {

  const [questions, setQuestions] = useState();
  const [score, setScore] = useState(0);

  const fetchQuestions = (key) => {
    const keyDict = {'C': 1, 'G': 2, 'D': 3, 'A': 4, 'E': 5, 'B': 6, 'Gb': 7, 'Db': 8, 'Ab': 9, 'Eb': 10, 'Bb': 11, 'F': 12};
    let keys = [];
    keys.push(keyDict[key]);
    keys.push(keyDict[key]+1 === 13 ? 1 : keyDict[key]+1);
    keys.push(keyDict[key]-1 === 0 ? 12 : keyDict[key]-1);

    const questionSet = [];
    for(let i = 0; i < 10; i++){
      const answer = keys[Math.floor(Math.random() * keys.length)];
      questionSet.push({questionType: 1, questionText: 'What do you hear?'});
      const answerAudio = audioPaths[answer][Math.floor(Math.random() * audioPaths[answer].length)];
      questionSet[i].questionAudio = answerAudio;
      questionSet[i].answerOptions = [];
      let options = [];
      while(options.length < 3) {
        let option = keys[Math.floor(Math.random() * keys.length)];
        if(!options.includes(option)) {
          options.push(option);
          if(option === answer) {
            questionSet[i].answerOptions.push({option: Object.keys(keyDict)[option-1], optionAudio: answerAudio, isCorrect: true});
          } else {
            questionSet[i].answerOptions.push({option: Object.keys(keyDict)[option-1], optionAudio: audioPaths[option][Math.floor(Math.random() * audioPaths[option].length)], isCorrect: false});
          }
        }
      }
    }
    console.log(questions);
    setQuestions(questionSet);
  };

  return (
    <BrowserRouter>
    <div>
      <Header />
      <Routes>
      <Route path='/' element={<Home />} exact />
      <Route path='/unit' element={<Unit fetchQuestions={fetchQuestions} />} exact />
      <Route path='/lesson' element={<Lesson score={score} setScore={setScore} questions={questions} />} exact />
      <Route path='/result' element={<Result score={score}/>} exact />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
