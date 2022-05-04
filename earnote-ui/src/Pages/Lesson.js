import { Button } from '@mui/material';
import { useState } from 'react';
import Question from "../Components/Question.js";

const Lesson = () => {

    const questions = [
		{
            questionType: 1,
			questionText: 'What do you hear?',
            questionAudio: 'audio/g19.wav',
			answerOptions: [
				{ option: 'A', optionAudio: 'audio/a.wav', isCorrect: false },
				{ option: 'D', optionAudio: 'audio/d.wav', isCorrect: false },
				{ option: 'G', optionAudio: 'audio/g19.wav', isCorrect: true },
			],
		},
		{
            questionType: 1,
			questionText: 'What do you hear?',
            questionAudio: 'audio/d.wav',
			answerOptions: [
				{ option: 'A', optionAudio: 'audio/a6.wav', isCorrect: false },
				{ option: 'D', optionAudio: 'audio/d.wav', isCorrect: true },
				{ option: 'G', optionAudio: 'audio/g19.wav', isCorrect: false },
			],
		},
		{
            questionType: 1,
			questionText: 'Which is the same note?',
            questionAudio: 'audio/a.wav',
			answerOptions: [
				{ option: 'G', optionAudio: 'audio/g19.wav', isCorrect: false },
				{ option: 'D', optionAudio: 'audio/d.wav', isCorrect: false },
				{ option: 'A', optionAudio: 'audio/a6.wav', isCorrect: true },
			],
		},
		{
            questionType: 1,
			questionText: 'Which is the same note?',
            questionAudio: 'audio/dlow.wav',
			answerOptions: [
				{ option: 'D', optionAudio: 'audio/d.wav', isCorrect: true },
				{ option: 'A', optionAudio: 'audio/a.wav', isCorrect: false },
				{ option: 'G', optionAudio: 'audio/g19.wav', isCorrect: false },
			],
		},
	];

    //const [options, setOptions] = useState();
    const [currQues, setCurrQues] = useState(0);
    const [score, setScore] = useState(0);

    return (
        <div>
            <span>Lesson Page</span>
            <Question
              currQues={currQues}
              setCurrQues={setCurrQues}
              questions={questions}
              score={score}
              setScore={setScore}
            />
        </div>
    );
};

export default Lesson;