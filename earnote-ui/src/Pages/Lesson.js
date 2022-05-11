import { Button } from '@mui/material';
import { useState } from 'react';
import Question from "../Components/Question.js";
import "./Lesson.css";

const Lesson = ({score, setScore, questions, lessonKey, lessonUnit}) => {

    const [currQues, setCurrQues] = useState(0);
    //console.log(questions);

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
            />) : (
                <div>test</div>
            )}
        </div>
    );
};

export default Lesson;