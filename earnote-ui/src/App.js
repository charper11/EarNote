import './App.css';
import Home from './Pages/Home.js';
import Lesson from './Pages/Lesson.js';
import Result from './Pages/Result.js';
import Header from './Components/Header.js';
import SettingsPopUp from './Components/SettingsPopUp';
import About from './Pages/About';
import Guide from './Pages/Guide';
import Unit from './Pages/Unit';
import { HashRouter, Route, Routes } from "react-router-dom";
import { useState } from 'react';
import audioPaths from './Data/Data';

function App() {

  const [langObj, setLangObj] = useState(localStorage.getItem('lang') ? require('./Language/' + localStorage.getItem('lang') + '.json') : require('./Language/en.json'));

  const [questions, setQuestions] = useState();
  const [score, setScore] = useState(0);
  const [lessonKey, setLessonKey] = useState();
  const [lessonUnit, setLessonUnit] = useState();
  const [secondNote, setSecondNote] = useState();
  const [thirdNote, setThirdNote] = useState();

  const [settingsState, setSettingsState] = useState(false);

  const getUnitPercent = (unit) => {
    const keys = ["Ab", "A", "Bb", "B", "C", "Db", "D", "Eb", "E", "F", "Gb", "G"];
    let count = 0;
    keys.forEach(key => {
        if(localStorage.getItem(key+unit.toString())) count++;
    });
    if(count === 0) {
        return "";
    } else {
        let percent = Math.floor((count / 12) * 100);
        return percent.toString() + "%";
    }
}

  const toggleSettings = () => {
      setSettingsState(!settingsState);
  }

  const fetchQuestions = (key, unit) => {
    const keyDict = {'C': 1, 'G': 2, 'D': 3, 'A': 4, 'E': 5, 'B': 6, 'Gb': 7, 'Db': 8, 'Ab': 9, 'Eb': 10, 'Bb': 11, 'F': 12};
    //get the three notes that make up the 3 major notes of the lesson key's chord.
    let keys = [];
    keys.push(keyDict[key]);
    keys.push(keyDict[key]+1 === 13 ? 1 : keyDict[key]+1);
    setSecondNote(Object.keys(keyDict)[keys[1]-1]);
    keys.push(keyDict[key]+4 % 12 === 0 ? 12 : keyDict[key]+4 % 12);
    setThirdNote(Object.keys(keyDict)[keys[2]-1]);

    //used for making sure the same question isn't asked twice in a row.
    let lastQuestionAudio = "";

    /*
    questionSet is an array of question objects that will be constructed like the following example:
    const questionSet = [
      {
              questionType: 1,
              questionKey: G,
        questionText: 'What do you hear?',
              questionAudio: 'audio/g19.wav',
        answerOptions: [
          { option: 'A', optionAudio: 'audio/a.wav', isCorrect: false },
          { option: 'D', optionAudio: 'audio/d.wav', isCorrect: false },
          { option: 'G', optionAudio: 'audio/g19.wav', isCorrect: true },
        ],
      },
      {
              questionType: 2,
              questionKey: A,
        questionText: 'Which is the same note?',
              questionAudio: 'audio/a.wav',
        answerOptions: [
          { option: 'G', optionAudio: 'audio/g19.wav', isCorrect: false },
          { option: 'D', optionAudio: 'audio/d.wav', isCorrect: false },
          { option: 'A', optionAudio: 'audio/a6.wav', isCorrect: true },
        ],
      },
    ];
    */
   
    const questionSet = [];
    for(let i = 0; i < 10; i++){
      const answer = keys[Math.floor(Math.random() * keys.length)];
      if(unit === 1) {
        if(i<3){
          questionSet.push({questionType: 1, questionText: 'What do you hear?'});
        } else {
          questionSet.push({questionType: 2, questionText: 'Which is the same note?'});
        }
      }
      if(unit === 2) {
          questionSet.push({questionType: 4, questionText: 'Select the ' + Object.keys(keyDict)[answer-1] + ' note.'});
      }
      if(unit === 3) {
        questionSet.push({questionType: 3, questionText: 'What key do you hear?'});
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
            //if question type is 1, then its the start question and the answer should be the same as the question sound played.
            if(questionSet[i].questionType === 1) {
              questionSet[i].answerOptions.push({option: Object.keys(keyDict)[option-1], optionAudio: answerAudio, isCorrect: true});
            } else {
              //else keep getting an audio of the same key until it is different from the question audio.
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
    <HashRouter>
    <div>
      <Header toggleSettings={toggleSettings} langObj={langObj}/>
      <Routes>
      <Route path='/' element={<Home setLessonUnit={setLessonUnit} getUnitPercent={getUnitPercent} langObj={langObj} />} exact />
      <Route path='/lesson' element={<Lesson score={score} setScore={setScore} questions={questions} lessonKey={lessonKey} lessonUnit={lessonUnit} secondNote={secondNote} thirdNote={thirdNote} setLessonUnit={setLessonUnit} getUnitPercent={getUnitPercent} langObj={langObj} />} exact />
      <Route path='/result' element={<Result score={score} lessonKey={lessonKey} lessonUnit={lessonUnit} />} exact />
      <Route path='/about' element={<About />} exact />
      <Route path='/guide' element={<Guide />} exact />
      <Route path='/unit' element={<Unit fetchQuestions={fetchQuestions} setScore={setScore} setLessonKey={setLessonKey} lessonUnit={lessonUnit} setLessonUnit={setLessonUnit} getUnitPercent={getUnitPercent} langObj={langObj} />} extact />
      </Routes>
      {settingsState ? <SettingsPopUp toggleSettings={toggleSettings} langObj={langObj} setLangObj={setLangObj} /> : null}
    </div>
    </HashRouter>
  );
}

export default App;
