import { useState } from 'react';
import InfoPopUp from '../Components/InfoPopUp.js';
import Question from "../Components/Question.js";
import StartPopUp from '../Components/StartPopUp.js';
import "./Lesson.css";

const Lesson = ({score, setScore, questions, lessonKey, lessonUnit, secondNote, thirdNote}) => {

    const [currQues, setCurrQues] = useState(0);
    const [isFirst, setIsFirst] = useState(true);
    const [closeInfo, setCloseInfo] = useState(false);

    const playAudio = (audioPath) => {
      const audio = new Audio(audioPath);
      if(audioPath === "audio/piano-single-note-g.wav" || audioPath === "audio/piano-note-e.wav" || audioPath === "audio/piano-Gb.wav") {
        audio.volume = 0.5;
      }

      audio.play();
  };

    return (
        <div className='lesson'>
            <div className='lessonInfo'>
              <span>Unit {lessonUnit} key of {lessonKey}</span>
              <span>Score: {score}</span>
            </div>
            { 1 === 1 ? (<Question
              currQues={currQues}
              setCurrQues={setCurrQues}
              questions={questions}
              score={score}
              setScore={setScore}
              playAudio={playAudio}
            />) : (
                <div>test</div>
            )}
            {isFirst ? <StartPopUp setIsFirst={setIsFirst} playAudio={playAudio} questions={questions} lessonKey={lessonKey} lessonUnit={lessonUnit} secondNote={secondNote} thirdNote={thirdNote} /> : null}
            {currQues===3 && !closeInfo && lessonUnit===1 ? <InfoPopUp setCloseInfo={setCloseInfo} playAudio={playAudio} questions={questions} /> : null}
        </div>
    );
};

export default Lesson;