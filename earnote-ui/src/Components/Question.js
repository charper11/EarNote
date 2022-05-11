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
                const audioDefaultPlay = new Audio(questions[currQues + 1].questionAudio);
                audioDefaultPlay.play();
            }
        }
    };

    const handlePlay = () => {
        const audio = new Audio(questions[currQues].questionAudio);
        audio.play();
    };

    const handleSelect = (option, type) => {
        if(type !== 3) {
            const audio = new Audio(option.optionAudio);
            audio.play();
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

                { questions[currQues].questionType !== 4 ? (<Button variant="contained" onClick={handlePlay} disabled={submitOrNext==="next"}>Play</Button>) : (<></>)}
                <audio autoPlay><source src={questions[currQues].questionAudio} type="audio/wav" /></audio>

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