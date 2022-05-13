import { Button } from '@mui/material';
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Question.css';

const Question = ({
    currQues,
    setCurrQues,
    questions,
    setScore,
    score,
    playAudio,
}) => {

    const [selected, setSelected] = useState();
    const [result, setResult] = useState();
    const [isSelected, setIsSelected] = useState(false);
    const [submitOrNext, setSubmitOrNext] = useState("submit");

    const navigate = useNavigate();

    const handleNext = () => {
        if(submitOrNext === "submit"){
            setSubmitOrNext("next");
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
            setSubmitOrNext("submit");
            if(questions[currQues + 1].questionType !== 4) {
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
        if (submitOrNext === "submit" && selected === i) {
            return "select";
        } else if (submitOrNext === "next") {
            if (selected === i && result) return "correct";
            else if (selected === i && !result) return "wrong";
            else if (i.isCorrect) return "correct";
        }
    }

    return (
        <div className='question'>
            <Link to="/">Quit</Link>
            <h1>Question {currQues + 1} :</h1>

            <div className="singleQuestion">
                <h2>{questions[currQues].questionText}</h2>

                { questions[currQues].questionType !== 4 && questions[currQues].questionType !== 1 ? (<Button variant="contained" onClick={() => playAudio(questions[currQues].questionAudio)} disabled={submitOrNext==="next"}>Play</Button>) : (<></>)}

                <div className="options">
                    {questions[currQues].answerOptions &&
                    questions[currQues].answerOptions.map((options) => (
                        <button
                            className={`singleOption ${selected && handleOptionCSS(options)}`}
                            key={options.option}
                            onClick={() => handleSelect(options, questions[currQues].questionType)}
                            disabled={submitOrNext==="next"}
                        >
                            {questions[currQues].questionType !== 4 ? (options.option) : ("🔊")}
                            {localStorage.getItem('isColorBlindSet') && options.isCorrect && submitOrNext==="next" ? "\t✔️" : null}
                            {localStorage.getItem('isColorBlindSet') && submitOrNext==="next" && selected===options && !result ? "\t❌" : null}
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