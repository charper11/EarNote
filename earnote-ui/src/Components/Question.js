import { Button } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Question.css';

const Question = ({
    currQues,
    setCurrQues,
    questions,
    setScore,
    score,
    playAudio,
    langObj,
}) => {

    const [selected, setSelected] = useState();
    const [result, setResult] = useState();
    const [isSelected, setIsSelected] = useState(false);
    const [submitOrNext, setSubmitOrNext] = useState(langObj.Lesson.submit);

    const navigate = useNavigate();

    const handleNext = () => {
        if(submitOrNext === langObj.Lesson.submit){
            setSubmitOrNext(langObj.Lesson.next);
            if(result) setScore(score + 1);
        }
        else if(currQues > 8) {
            navigate("/result");
        }
        else {
            setCurrQues(currQues + 1);
            setSelected();
            setResult();
            setIsSelected(false);
            setSubmitOrNext(langObj.Lesson.submit);
            if(questions[currQues + 1].questionType !== 4 && currQues !== 2) {
                setTimeout(() => {playAudio(questions[currQues + 1].questionAudio);}, 1000);
            }
        }
    };

    const handleSelect = (option, type) => {
        if(type !== 3) {
            playAudio(option.optionAudio);
        }
        setResult(option.isCorrect);
        setSelected(option);
        setIsSelected(true);
    };

    const handleOptionCSS = (i) => {
        if (submitOrNext === langObj.Lesson.submit && selected === i) {
            return "select";
        } else if (submitOrNext === langObj.Lesson.next) {
            if (selected === i && result) return localStorage.getItem('isColorBlindSet') ? "correct colorBlind" : "correct";
            else if (selected === i && !result) return localStorage.getItem('isColorBlindSet') ? "wrong colorBlind" : "wrong";
            else if (i.isCorrect) return localStorage.getItem('isColorBlindSet') ? "correct colorBlind" : "correct";
        }
    }

    return (
        <div className='question'>
            <div className="singleQuestion">
                <h2>{questions[currQues].questionText}</h2>

                <Button variant="contained" onClick={() => playAudio(questions[currQues].questionAudio)} disabled={submitOrNext==="next"}>{langObj.Lesson.play}</Button>

                <div className="options">
                    {questions[currQues].answerOptions &&
                    questions[currQues].answerOptions.map((options) => (
                        <button
                            className={`singleOption ${selected && handleOptionCSS(options)}`}
                            key={options.option}
                            onClick={() => handleSelect(options, questions[currQues].questionType)}
                            disabled={submitOrNext===langObj.Lesson.next}
                        >
                            {questions[currQues].questionType !== 4 ? (options.option) : ("🔊")}
                            {localStorage.getItem('isColorBlindSet') && options.isCorrect && submitOrNext===langObj.Lesson.next ? "\t✔️" : null}
                            {localStorage.getItem('isColorBlindSet') && submitOrNext===langObj.Lesson.next && selected===options && !result ? "\t❌" : null}
                        </button>
                    ))}
                </div>

                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleNext}
                  disabled={!(isSelected)}
                >
                    {submitOrNext}
                </Button>
            </div>
        </div>
    );
};

export default Question;