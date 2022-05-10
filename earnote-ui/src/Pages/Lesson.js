import { Button } from '@mui/material';
import { useState } from 'react';
import Question from "../Components/Question.js";
import "./Lesson.css";

const Lesson = ({score, setScore, questions, unit, lessonKey}) => {

    /*
    const questions = [
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

    const [currQues, setCurrQues] = useState(0);
    //console.log(questions);

    return (
        <div className='lesson'>
            <div className='lessonInfo'>
              <span>Unit {unit} key of {lessonKey}</span>
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