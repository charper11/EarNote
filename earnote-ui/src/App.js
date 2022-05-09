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
  const [unit, setUnit] = useState();

  const fetchQuestions = (key) => {
    const keyDict = {'C': 1, 'G': 2, 'D': 3, 'A': 4, 'E': 5, 'B': 6, 'Gb': 7, 'Db': 8, 'Ab': 9, 'Eb': 10, 'Bb': 11, 'F': 12};
    //get the three notes that make up the 3 major notes of the lesson key's chord.
    let keys = [];
    keys.push(keyDict[key]);
    keys.push(keyDict[key]+1 === 13 ? 1 : keyDict[key]+1);
    keys.push(keyDict[key]-1 === 0 ? 12 : keyDict[key]-1);

    //used for making sure the same question isn't asked twice in a row.
    let lastQuestionAudio = "";

    const questionSet = [];
    for(let i = 0; i < 10; i++){
      const answer = keys[Math.floor(Math.random() * keys.length)];
      if(unit === 1) {
        if(i<6){
          questionSet.push({questionType: 1, questionText: 'What do you hear?'});
        } else {
          questionSet.push({questionType: 2, questionText: 'Which is the same note?'});
        }
    }
    if(unit === 2) {
      if(i<6){
        questionSet.push({questionType: 3, questionText: 'What key do you hear?'});
      } else {
        questionSet.push({questionType: 4, questionText: 'Select the ' + Object.keys(keyDict)[answer-1] + ' note.'});
      }
    }

      questionSet[i].questionKey = Object.keys(keyDict)[answer-1];

      //get question/answer audio and make sure it is not the same as the previous question.
      let answerAudio = "";
      do {
        answerAudio = audioPaths[answer][Math.floor(Math.random() * audioPaths[answer].length)];
      } while(answerAudio === lastQuestionAudio)
      questionSet[i].questionAudio = answerAudio;
      lastQuestionAudio = answerAudio;

      questionSet[i].answerOptions = [];
      let options = [];
      while(options.length < 3) {
        let option = keys[Math.floor(Math.random() * keys.length)];
        if(!options.includes(option)) {
          options.push(option);
          if(option === answer) {
            if(i<6) {
              questionSet[i].answerOptions.push({option: Object.keys(keyDict)[option-1], optionAudio: answerAudio, isCorrect: true});
            } else {
              let tmpAudioPath = "";
              do {
                tmpAudioPath = audioPaths[option][Math.floor(Math.random() * audioPaths[option].length)];
              } while(tmpAudioPath === answerAudio)
              questionSet[i].answerOptions.push({option: Object.keys(keyDict)[option-1], optionAudio: tmpAudioPath, isCorrect: true});
            }
          } else {
            questionSet[i].answerOptions.push({option: Object.keys(keyDict)[option-1], optionAudio: audioPaths[option][Math.floor(Math.random() * audioPaths[option].length)], isCorrect: false});
          }
        }
      }
    }
    setQuestions(questionSet);
  };

  return (
    <BrowserRouter>
    <div>
      <Header />
      <Routes>
      <Route path='/' element={<Home unit={unit} setUnit={setUnit} />} exact />
      <Route path='/unit' element={<Unit fetchQuestions={fetchQuestions} setScore={setScore} />} exact />
      <Route path='/lesson' element={<Lesson score={score} setScore={setScore} questions={questions} unit={unit} />} exact />
      <Route path='/result' element={<Result score={score}/>} exact />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
